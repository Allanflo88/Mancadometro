import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import moment from 'moment';
import Mancada from '../../app/models/mancada';


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
  }

  get(): Promise<Mancada>{
    return new Promise((resolve, reject)=>{
      console.log("mancadas_" + this.convertDate(moment().toString()))
      this.storage.get("mancadas_" + this.convertDate(moment().toString())).then((res)=>{
        resolve(res);
      }).catch((err)=>{
        reject(err);
      })
    })
  }

  set(mancada:Mancada): void{
    mancada.date = this.convertDate(moment().toString())
    this.storage.set("mancadas_" + mancada.date, mancada);
  }

  convertDate(date:string): String{
    return moment(date).format("DD-MM-YYYY");
  }

  getAll(): Promise<Mancada[]>{
    var mancadas: Mancada[] = [];
    return new Promise((resolve, reject)=>{
      this.storage.forEach((value:Mancada)=>{
        mancadas.push(value);
      })
      resolve(mancadas);
    })
  }

}
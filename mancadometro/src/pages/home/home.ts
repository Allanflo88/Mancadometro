import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import Mancada from '../../app/models/mancada'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mancada: Mancada = {
    nMancadas: 0,
    date: null
  };

  constructor(public navCtrl: NavController, private storage: StorageProvider) {
    storage.get().then((res)=>{
      if(res){
        this.mancada = res;
      }
    }).catch((err)=>{
      alert("Algo deu errado!!!")
    })
  }

  increaseMancadas(): void{
    this.mancada.nMancadas += 1;
    this.storage.set(this.mancada);
  }

}

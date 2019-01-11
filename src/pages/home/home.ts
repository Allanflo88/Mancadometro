import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import Mancada from '../../app/models/mancada'
import { HistoricoPage } from '../historico/historico';
import { Badge } from '@ionic-native/badge';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mancada: Mancada = {
    nMancadas: 0,
    date: null
  };

  constructor(public navCtrl: NavController, private storage: StorageProvider, private badge: Badge, private alert: AlertController) {
    this.getMancadas();
  }

  getMancadas(){
    this.storage.get().then((res)=>{
      if(res){
        this.mancada = res;
        this.badge.set(res.nMancadas);
      }
      else{
        this.badge.set(this.mancada.nMancadas);
      }
    }).catch((err)=>{
      this.alert.create({
        title: "Ops...",
        message: "Algo errado aconteceu.",
        buttons: ['Ok']
      }).present();
    })
  }

  increaseMancadas(): void{
    this.mancada.nMancadas += 1;
    this.storage.set(this.mancada);
    this.badge.increase(1);
  }

  goToHistorico(){
    this.navCtrl.push(HistoricoPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Mancada from '../../app/models/mancada';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  mancadas: Mancada[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageProvider) {
    this.getMancadas();
  }

  getMancadas(){
    this.storage.getAll().then((res)=>{
      this.mancadas = res;
    })
  }

}

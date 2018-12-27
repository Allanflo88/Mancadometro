import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Mancada from '../../app/models/mancada';
import { StorageProvider } from '../../providers/storage/storage';
import { ModalController } from 'ionic-angular';
import { HistoricoFiltroPage } from '../historico-filtro/historico-filtro';
import Filtro from '../../app/models/filtro';

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

  mancadas: Mancada[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageProvider, private modal: ModalController) {
    this.getMancadas();
  }

  getMancadas(){
    this.storage.getAll().then((res)=>{
      this.mancadas = res;
    })
  }

  openFiltro(){
    let modal = this.modal.create(HistoricoFiltroPage);
    modal.present();
    modal.onDidDismiss((res)=>{
      this.filtrarMancadas(res);
    })
  }

  filtrarMancadas(filtro: Filtro){
    var TIPOS_FILTRO = {
      LIMPAR: 0,
      DATE: 1
    }
    if(filtro){
      this.mancadas = [];
      switch (filtro.tipo) {
        case TIPOS_FILTRO.LIMPAR:
          this.getMancadas();
          break;
        case TIPOS_FILTRO.DATE:
          this.getByDate(filtro.filtro);
          break;
      }


    }

  }

  getByDate(filtro){
    this.storage.filterByDate(filtro).then((res:Mancada)=>{
      this.mancadas.push(res);
    })
  }

}

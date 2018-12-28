import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment';
import Filtro from '../../app/models/filtro';


/**
 * Generated class for the HistoricoFiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico-filtro',
  templateUrl: 'historico-filtro.html',
})
export class HistoricoFiltroPage {

  date: string = moment().toISOString();
  maxDate: string = moment(this.date).format("YYYY-MM-DD");


  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  close(value?){
    this.view.dismiss(value);
  }

  aplicarFiltro(){
    var TIPOS_FILTRO = {
      LIMPAR: 0,
      DATE: 1
    }

    var filtro: Filtro = {
      tipo: TIPOS_FILTRO.DATE,
      filtro: moment(this.date).format("DD-MM-YYYY")
    };
    this.close(filtro);
  }

  limparFiltro(){
    var TIPOS_FILTRO = {
      LIMPAR: 0,
      DATE: 1
    }

    var filtro: Filtro = {
      tipo: TIPOS_FILTRO.LIMPAR,
      filtro: null
    }
    
    this.close(filtro);
  }

}

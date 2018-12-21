import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment';


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

  date = moment().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  close(value){
    this.view.dismiss(value);
  }

  aplicarFiltro(){
    this.close(moment(this.date).format("DD-MM-YYYY"));
  }

}

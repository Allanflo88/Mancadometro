import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoFiltroPage } from './historico-filtro';

@NgModule({
  declarations: [
    HistoricoFiltroPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoFiltroPage),
  ],
})
export class HistoricoFiltroPageModule {}

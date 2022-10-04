import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumolibranzaPage } from './consumolibranza.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumolibranzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumolibranzaPageRoutingModule {}

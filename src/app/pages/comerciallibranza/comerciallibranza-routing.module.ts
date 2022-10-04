import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComerciallibranzaPage } from './comerciallibranza.page';

const routes: Routes = [
  {
    path: '',
    component: ComerciallibranzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComerciallibranzaPageRoutingModule {}

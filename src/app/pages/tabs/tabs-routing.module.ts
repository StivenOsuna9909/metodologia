import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ConsumolibranzaPageModule } from '../consumolibranza/consumolibranza.module';
import { ComercialventanillaPageModule } from '../comercialventanilla/comercialventanilla.module';
import { ComerciallibranzaPageModule } from '../comerciallibranza/comerciallibranza.module';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'consumoventanilla',
        loadChildren: () => import ('../consumoventanilla/consumoventanilla.module').then(m => m.ConsumoventanillaPageModule)
      },
      {
        path: 'consumolibranza',
        loadChildren: () => import('../consumolibranza/consumolibranza.module').then( m => m.ConsumolibranzaPageModule )
      },
      {
        path: 'comercialventanilla',
        loadChildren: () => import('../comercialventanilla/comercialventanilla.module').then( m => m.ComercialventanillaPageModule )
      },
      {
        path: 'comerciallibranza',
        loadChildren: () => import('../comerciallibranza/comerciallibranza.module').then( m => m.ComerciallibranzaPageModule )
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

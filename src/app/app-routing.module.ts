import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/irlestrés/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/irl/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'activosliquidos',
    loadChildren: () => import('./pages/activosliquidos/activosliquidos.module').then( m => m.ActivosliquidosPageModule)
  },
  {
    path: 'indicepromdemorosidad',
    loadChildren: () => import('./pages/indicepromdemorosidad/indicepromdemorosidad.module').then( m => m.IndicepromdemorosidadPageModule)
  },
  {
    path: 'indicepromdemorosidadpa',
    loadChildren: () => import('./pages/indicepromdemorosidadpa/indicepromdemorosidadpa.module').then( m => m.IndicepromdemorosidadpaPageModule)
  },
  {
    path: 'indicerecaudodeaportes',
    loadChildren: () => import('./pages/indicerecaudodeaportes/indicerecaudodeaportes.module').then( m => m.IndicerecaudodeaportesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'consumoventanilla',
    loadChildren: () => import('./pages/consumoventanilla/consumoventanilla.module').then( m => m.ConsumoventanillaPageModule)
  },
  {
    path: 'consumolibranza',
    loadChildren: () => import('./pages/consumolibranza/consumolibranza.module').then( m => m.ConsumolibranzaPageModule)
  },
  {
    path: 'comercialventanilla',
    loadChildren: () => import('./pages/comercialventanilla/comercialventanilla.module').then( m => m.ComercialventanillaPageModule)
  },
  {
    path: 'comerciallibranza',
    loadChildren: () => import('./pages/comerciallibranza/comerciallibranza.module').then( m => m.ComerciallibranzaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

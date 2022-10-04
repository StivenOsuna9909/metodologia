import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicerecaudodeaportesPageRoutingModule } from './indicerecaudodeaportes-routing.module';

import { IndicerecaudodeaportesPage } from './indicerecaudodeaportes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicerecaudodeaportesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IndicerecaudodeaportesPage]
})
export class IndicerecaudodeaportesPageModule {}

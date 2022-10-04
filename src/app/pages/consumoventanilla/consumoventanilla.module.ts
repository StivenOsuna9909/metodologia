import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoventanillaPageRoutingModule } from './consumoventanilla-routing.module';

import { ConsumoventanillaPage } from './consumoventanilla.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoventanillaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConsumoventanillaPage]
})
export class ConsumoventanillaPageModule {}

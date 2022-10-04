import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicepromdemorosidadPageRoutingModule } from './indicepromdemorosidad-routing.module';

import { IndicepromdemorosidadPage } from './indicepromdemorosidad.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicepromdemorosidadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IndicepromdemorosidadPage]
})
export class IndicepromdemorosidadPageModule {}

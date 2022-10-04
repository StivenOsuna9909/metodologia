import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumolibranzaPageRoutingModule } from './consumolibranza-routing.module';

import { ConsumolibranzaPage } from './consumolibranza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumolibranzaPageRoutingModule
  ],
  declarations: [ConsumolibranzaPage]
})
export class ConsumolibranzaPageModule {}

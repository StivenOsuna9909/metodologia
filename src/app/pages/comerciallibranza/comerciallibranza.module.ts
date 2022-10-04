import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComerciallibranzaPageRoutingModule } from './comerciallibranza-routing.module';

import { ComerciallibranzaPage } from './comerciallibranza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComerciallibranzaPageRoutingModule
  ],
  declarations: [ComerciallibranzaPage]
})
export class ComerciallibranzaPageModule {}

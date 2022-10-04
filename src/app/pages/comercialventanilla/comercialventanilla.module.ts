import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComercialventanillaPageRoutingModule } from './comercialventanilla-routing.module';

import { ComercialventanillaPage } from './comercialventanilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComercialventanillaPageRoutingModule
  ],
  declarations: [ComercialventanillaPage]
})
export class ComercialventanillaPageModule {}

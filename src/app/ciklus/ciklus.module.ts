import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiklusPageRoutingModule } from './ciklus-routing.module';

import { CiklusPage } from './ciklus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiklusPageRoutingModule
  ],
  declarations: [CiklusPage]
})
export class CiklusPageModule {}

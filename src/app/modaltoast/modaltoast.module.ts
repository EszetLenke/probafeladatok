import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltoastPageRoutingModule } from './modaltoast-routing.module';

import { ModaltoastPage } from './modaltoast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltoastPageRoutingModule
  ],
  declarations: [ModaltoastPage]
})
export class ModaltoastPageModule {}

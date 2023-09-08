import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicscrollPageRoutingModule } from './ionicscroll-routing.module';

import { IonicscrollPage } from './ionicscroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicscrollPageRoutingModule
  ],
  declarations: [IonicscrollPage]
})
export class IonicscrollPageModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualscrollPageRoutingModule } from './virtualscroll-routing.module';

import { VirtualscrollPage } from './virtualscroll.page';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualscrollPageRoutingModule,
    ScrollingModule,
  ],
  declarations: [VirtualscrollPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VirtualscrollPageModule {}

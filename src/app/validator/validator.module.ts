import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ValidatorPageRoutingModule } from './validator-routing.module';

import { ValidatorPage } from './validator.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidatorPageRoutingModule,
    ReactiveFormsModule,
  ],

  declarations: [ValidatorPage],
})
export class ValidatorPageModule {}

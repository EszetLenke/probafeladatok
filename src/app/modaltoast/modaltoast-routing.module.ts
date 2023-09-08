import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaltoastPage } from './modaltoast.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltoastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaltoastPageRoutingModule {}

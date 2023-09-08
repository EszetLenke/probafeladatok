import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiklusPage } from './ciklus.page';

const routes: Routes = [
  {
    path: '',
    component: CiklusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiklusPageRoutingModule {}

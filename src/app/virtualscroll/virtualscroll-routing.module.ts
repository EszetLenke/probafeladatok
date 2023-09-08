import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualscrollPage } from './virtualscroll.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualscrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualscrollPageRoutingModule {}

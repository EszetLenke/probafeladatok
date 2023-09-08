import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicscrollPage } from './ionicscroll.page';

const routes: Routes = [
  {
    path: '',
    component: IonicscrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicscrollPageRoutingModule {}

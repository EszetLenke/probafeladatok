import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModaltoastPage } from './modaltoast/modaltoast.page';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  { path: 'feladat1', component: ModaltoastPage },

  {
    path: 'modaltoast',
    loadChildren: () =>
      import('./modaltoast/modaltoast.module').then(
        (m) => m.ModaltoastPageModule
      ),
  },

  {
    path: 'feladat2',
    loadChildren: () =>
      import('./loading/loading.module').then((m) => m.LoadingPageModule),
  },
  {
    path: 'feladat3',
    loadChildren: () =>
      import('./ciklus/ciklus.module').then((m) => m.CiklusPageModule),
  },
  {
    path: 'feladat4',
    loadChildren: () =>
      import('./virtualscroll/virtualscroll.module').then(
        (m) => m.VirtualscrollPageModule
      ),
  },
  {
    path: 'feladat5',
    loadChildren: () =>
      import('./ionicscroll/ionicscroll.module').then(
        (m) => m.IonicscrollPageModule
      ),
  },
  {
    path: 'feladat6',
    loadChildren: () =>
      import('./validator/validator.module').then((m) => m.ValidatorPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

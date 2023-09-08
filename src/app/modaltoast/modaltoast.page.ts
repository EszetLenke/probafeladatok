import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MasodfokuComponent } from './masodfoku/masodfoku.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modaltoast',
  templateUrl: './modaltoast.page.html',
  styleUrls: ['./modaltoast.page.scss'],
})
export class ModaltoastPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MasodfokuComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

  goBackUsingBrowserBackButton(): void {
    //TODO NAVcontrollerrel megoldani
    window.history.back();
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-masodfoku',
  templateUrl: './masodfoku.component.html',
  styleUrls: ['./masodfoku.component.scss'],
})
export class MasodfokuComponent implements OnInit {
  public a!: number;
  public b!: number;
  public c!: number;

  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  public calculate() {
    const dicriminante = this.b ** 2 - 4 * this.a * this.c;

    if (dicriminante < 0) {
      this.presentToast('Nincs valós gyök!');
      return;
    }

    const x1 = (-this.b + Math.sqrt(dicriminante)) / (2 * this.a);
    const x2 = (-this.b - Math.sqrt(dicriminante)) / (2 * this.a);

    this.presentToast(`x1 = ${x1}, x2 = ${x2}`);
  }

  //ionic toast copy a documentációból
  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      position: 'bottom',
    });
    toast.present();
  }

  public dismiss() {
    this.modalController.dismiss();
    this.presentToast('Na majd akkor legközelebb!');
  }
}

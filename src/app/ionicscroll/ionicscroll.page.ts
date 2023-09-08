import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-ionicscroll',
  templateUrl: './ionicscroll.page.html',
  styleUrls: ['./ionicscroll.page.scss'],
})
export class IonicscrollPage implements OnInit {
  public items: string[] = [];
  constructor() {}

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
    console.log(this.items.length);
  }

  public onIonInfinite(ev: any) {
    this.generateItems();
    (ev as InfiniteScrollCustomEvent).target.complete();
  }
}

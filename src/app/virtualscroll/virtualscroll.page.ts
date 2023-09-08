import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.page.html',
  styleUrls: ['./virtualscroll.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualscrollPage implements OnInit {
  public itemList: { image: string; text: number }[] = [];

  constructor() {}

  ngOnInit() {
    console.log(this.itemList);

    this.generateRandomList(1000);
  }

  private generateRandomList(count: number): void {
    let number = 0;
    for (let i = 0; i < count; i++) {
      const randomImage = '../../assets/icon/favicon.png';
      const randomText = number;
      this.itemList.push({ image: randomImage, text: randomText });
      number++;
    }
  }
}
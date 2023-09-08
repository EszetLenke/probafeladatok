import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  public showSpinner: boolean = true;
  public progressValue: number = 0;
  public ellapsedTime: number = 0;
  private secondsInterval!: Subscription;

  constructor() {}

  goBackUsingBrowserBackButton(): void {
    window.history.back();
  }

  ngOnInit() {
    // Másodpercenkénti időzített console.log
    this.secondsInterval = interval(1000).subscribe(() => {
      if (this.ellapsedTime < 5) {
        this.ellapsedTime++;
        console.log(`${this.ellapsedTime}mp telt el`);
      }
    });

    // Csak 3 másodpercig marad a spinner
    setTimeout(() => {
      this.showSpinner = false;
      console.log('csiribá spinner eltünik!');
    }, 3000);

    // Navigáció 5 másodperc után
    setTimeout(() => {
      this.goBackUsingBrowserBackButton();
    }, 5000);

    // Progress bar
    const progressbarInterval = interval(100);
    const progressSubscription = progressbarInterval.subscribe(() => {
      if (this.progressValue < 1) {
        this.progressValue += 0.02;
      } else {
        progressSubscription.unsubscribe();
      }
    });
  }

  //elpuszittom vadul a másodpercenkénti időzitőt
  ngOnDestroy() {
    if (this.secondsInterval) {
      this.secondsInterval.unsubscribe();
    }
  }
}

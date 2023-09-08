import { Component, OnInit } from '@angular/core';
import { CiklusService } from './service/ciklus.service';
import { Human } from './ciklus.interface';
@Component({
  selector: 'app-ciklus',
  templateUrl: './ciklus.page.html',
  styleUrls: ['./ciklus.page.scss'],
})
export class CiklusPage implements OnInit {
  public humans: Human[] = [];
  public genderPercentages: {
    malePercentage: number;
    femalePercentage: number;
  };

  public malePercentage!: number;

  public humansWithoutChildren!: number;
  public eszterWomenCount!: number;
  public averageAge!: number;
  public twoFirstNames!: number;

  constructor(private dataService: CiklusService) {
    this.humans = this.dataService.generateRandomHumans(1000);
    console.log(this.humans);

    this.humansWithoutChildren =
      this.dataService.countHumansWithoutChildrenUsingDoWhile(this.humans);

    this.eszterWomenCount = this.dataService.countEszterWomenUsingSimpleFor(
      this.humans
    );

    this.averageAge = this.dataService.calculateAverageAgeUsingForOf(
      this.humans
    );

    this.genderPercentages = this.dataService.calculateGenderPercentage(
      this.humans
    );

    this.malePercentage = this.dataService.calculateMalePercentage(this.humans);

    this.twoFirstNames = this.dataService.countPeopleWithTwoFirstNames(
      this.humans
    );
  }

  ngOnInit() {}
}

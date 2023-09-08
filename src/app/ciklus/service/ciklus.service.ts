import { Injectable } from '@angular/core';
import { Sex } from './sex';
import { Human } from '../ciklus.interface';

@Injectable({
  providedIn: 'root',
})
export class CiklusService {
  private familyNames: string[] = [
    'Nagy',
    'Horvát',
    'Lakatos',
    'Kozma',
    'Czecze',
    'Berki',
    'Balogh',
    'Montvai',
    'Szentesi',
    'Rácz',
  ];

  private maleFirstNames: string[] = [
    'Arnold',
    'Elemér',
    'Robert',
    'Norbert',
    'Béla',
    'Gyula',
    'Dávid',
    'Gábor',
    'Ferenc',
    'Zoltán',
  ];

  private femaleFirstNames: string[] = [
    'Marika',
    'Eszter',
    'Zsófia',
    'Mária',
    'Beáta',
    'Enikő',
    'Mariann',
    'Sára',
    'Nóra',
    'Barbara',
  ];

  constructor() {}

  private generateRandomHuman(): any {
    const sex = this.generateRandomSex();
    const name = this.generateRandomName(sex);
    const age = this.generateRandomAge();
    const childrenCount = age < 20 ? 0 : this.getRandomInt(0, 10);
    const children = [];

    for (let i = 0; i < childrenCount; i++) {
      const childAge = this.generateRandomChildAge(age);
      const childSex = this.generateRandomSex();
      const childName = this.generateRandomName(childSex);
      children.push({
        id: this.generateRandomId(15),
        name: childName,
        age: childAge,
        sex: childSex,
        children: [] as Human[],
      });
    }

    return {
      id: this.generateRandomId(15),
      name,
      age,
      sex,
      children,
    };
  }

  private generateRandomName(sex: Sex): string {
    const firstNameCount = this.getRandomInt(1, 2);
    const firstNames = [];
    for (let i = 0; i < firstNameCount; i++) {
      if (sex === Sex.Male) {
        firstNames.push(this.maleFirstNames[this.getRandomInt(0, 9)]);
      } else {
        firstNames.push(this.femaleFirstNames[this.getRandomInt(0, 9)]);
      }
    }

    const lastName = this.familyNames[this.getRandomInt(0, 9)];

    const firstName = firstNames.join(' ');

    return `${lastName} ${firstName}`;
  }

  public generateRandomHumans(count: number): any[] {
    const humans = [];
    for (let i = 0; i < count; i++) {
      const human = this.generateRandomHuman();
      humans.push(human);
    }
    return humans;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private generateRandomAge(): number {
    return this.getRandomInt(0, 99);
  }

  private generateRandomSex(): Sex {
    return Math.random() < 0.5 ? Sex.Male : Sex.Female;
  }

  private generateRandomChildAge(parentAge: number): number {
    return this.getRandomInt(0, parentAge - 20);
  }

  public countHumansWithoutChildrenUsingDoWhile(humans: Human[]): number {
    let count = 0;
    let index = 0;

    do {
      const human = humans[index];
      if (human.children?.length === 0) {
        count++;
      }
      index++;
    } while (index < humans.length);

    return count;
  }

  private generateRandomId(length: number): string {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public countEszterWomenUsingSimpleFor(humans: Human[]): number {
    let count = 0;

    for (let i = 0; i < humans.length; i++) {
      const human = humans[i];

      if (human.sex === Sex.Female && human.name.includes('Eszter')) {
        count++;
      }
      if (human.children)
        if (human.children)
          for (let j = 0; j < human.children.length; j++) {
            const child = human.children[j];
            if (child.sex === Sex.Female && child.name.includes('Eszter')) {
              count++;
            }
          }
    }

    return count;
  }

  public calculateAverageAgeUsingForOf(humans: Human[]): number {
    let totalAge = 0;
    let numberOfHumans = 0;

    for (const human of humans) {
      totalAge += human.age;
      numberOfHumans++;

      if (human.children)
        for (const child of human.children) {
          totalAge += child.age;
          numberOfHumans++;
        }
    }

    if (numberOfHumans === 0) {
      return 0;
    }

    return totalAge / numberOfHumans;
  }

  public calculateGenderPercentage(humans: Human[]): {
    malePercentage: number;
    femalePercentage: number;
  } {
    let totalMale = 0;
    let totalFemale = 0;
    let totalHumans = humans.length;

    let index = 0;

    while (index < totalHumans) {
      const human = humans[index];
      if (human.sex === Sex.Male) {
        totalMale++;
      } else {
        totalFemale++;
      }
      index++;
    }

    const malePercentage = (totalMale / totalHumans) * 100;
    const femalePercentage = (totalFemale / totalHumans) * 100;

    return {
      malePercentage,
      femalePercentage,
    };
  }

  public calculateMalePercentage(humans: Human[]): number {
    let totalMale = 0;
    let totalHumans = humans.length;
    let index = 0;

    while (index < totalHumans) {
      const human = humans[index];
      if (human.sex === Sex.Male) {
        totalMale++;
      }

      index++;
    }

    return (totalMale / totalHumans) * 100;
  }

  public countPeopleWithTwoFirstNames(humans: Human[]): number {
    let count = 0;

    for (const index in humans) {
      const nameParts = humans[index].name.split(' ');

      if (nameParts.length === 3) {
        count++;
      }
    }

    return count;
  }
}

import { Sex } from './service/sex';

export interface Human {
  id: string;
  name: string;
  age: number;
  sex: Sex;
  children?: Human[];
}

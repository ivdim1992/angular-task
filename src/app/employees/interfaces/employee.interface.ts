import { IBaseEntity } from 'src/app/shared/interfaces';

export interface IEmployee extends IBaseEntity {
  firstName: string;
  lastName: string;
  name: string;
}

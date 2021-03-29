import { IBaseEntity } from '@app/shared/interfaces';

export interface IProject extends IBaseEntity {
  name: string;
  status: string;
  price: number;
  employees: string[];
  createdAt: string;
}

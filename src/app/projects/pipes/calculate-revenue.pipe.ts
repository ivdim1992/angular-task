import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from '../interfaces';

@Pipe({ name: 'calculateRevenue' })
export class CalculateRevenuePipe implements PipeTransform {
  public transform(projects: IProject[]) {
    return projects.filter((p) => p.status !== 'new').reduce((acc, curr) => acc + curr.price, 0);
  }
}

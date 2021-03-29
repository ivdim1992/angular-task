/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ComponentFixture } from '@angular/core/testing';

// Shared fixture
let fixture: ComponentFixture<any>;

export function selectElement<T = HTMLElement>(selector: string): T {
  return fixture.nativeElement.querySelector(selector);
}

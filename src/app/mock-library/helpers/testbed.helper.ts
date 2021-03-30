/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { DebugElement } from '@angular/core';

export function click(el: DebugElement | HTMLElement): void {
  if (el instanceof HTMLElement) {
    el.click();
  }
}

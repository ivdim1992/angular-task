import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, MatSidenavModule, RouterModule, FlexLayoutModule],
  exports: [SideNavComponent],
})
export class SideNavModule {}

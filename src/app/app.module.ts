import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { environment } from '@env/environment';
import { RootStoreModule } from './+store';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideNavModule } from './resources/side-nav';
import { EmployeesModule } from './employees';
@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    RootStoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    SideNavModule,
    EmployeesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

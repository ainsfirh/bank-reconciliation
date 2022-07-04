import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatIconModule } from '@angular/material/icon';
import {
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//login
import { LoginComponent } from './login';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { ReconComponent } from './recon/recon.component';
import { BankstatementComponent } from './bankstatement/bankstatement.component';
import { CashbookComponent } from './cashbook/cashbook.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports:      [ 
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule, 
  AppRoutingModule,
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule 
   ],

  declarations: [ 
  //login
  LoginComponent,
  AppComponent, 
  HelloComponent,
  ToolbarComponent,
  NavtabsComponent,
  SidenavListComponent,
  HomeComponent,
  ReconComponent,
  BankstatementComponent,
  CashbookComponent,
  ReportComponent,
  ProfileComponent,
  SettingComponent,
  LogoutComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

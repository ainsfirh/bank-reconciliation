import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//login
import { LoginComponent } from '../login';
import { AuthGuard } from '../helpers';
import { ProfileComponent } from '../profile/profile.component';
import { SettingComponent } from '../setting/setting.component';
import { LogoutComponent } from '../logout/logout.component';
import { HomeComponent } from '../home/home.component';
import { ReconComponent } from '../recon/recon.component';
import { BankstatementComponent } from '../bankstatement/bankstatement.component';
import { CashbookComponent } from '../cashbook/cashbook.component';
import { ReportComponent } from '../report/report.component';


const routes: Routes = [
  //login 
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
  { path: 'profile', component: ProfileComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recon', component: ReconComponent },
  { path: 'bankstatement', component: BankstatementComponent },
  { path: 'cashbook', component: CashbookComponent },
  { path: 'report', component: ReportComponent }
  
]

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
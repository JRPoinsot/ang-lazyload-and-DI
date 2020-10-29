import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminRightsComponent } from './admin/admin-rights/admin-rights.component';
import { HomeComponent } from './home/home.component';
import { UserContactComponent } from './user/user-contact/user-contact.component';
import { UserGeneralInfoComponent } from './user/user-general-info/user-general-info.component';
import { UserPreferencesComponent } from './user/user-preferences/user-preferences.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/rights', component: AdminRightsComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'user/infos', component: UserGeneralInfoComponent},
  { path: 'user/contact', component: UserContactComponent},
  { path: 'user/preferences', component: UserPreferencesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminRightsComponent } from './admin/admin-rights/admin-rights.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserGeneralInfoComponent } from './user/user-general-info/user-general-info.component';
import { UserPreferencesComponent } from './user/user-preferences/user-preferences.component';
import { UserContactComponent } from './user/user-contact/user-contact.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashboardComponent,
    AdminRightsComponent,
    UserProfileComponent,
    UserGeneralInfoComponent,
    UserPreferencesComponent,
    UserContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  entryComponents: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserContactRoutingModule } from './user-contact-routing.module';
import { UserContactComponent } from './user-contact.component';


@NgModule({
  declarations: [UserContactComponent],
  imports: [
    CommonModule,
    UserContactRoutingModule
  ]
})
export class UserContactModule { }

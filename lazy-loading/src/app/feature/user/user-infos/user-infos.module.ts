import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfosRoutingModule } from './user-infos-routing.module';
import { UserInfosComponent } from './user-infos.component';


@NgModule({
  declarations: [UserInfosComponent],
  imports: [
    CommonModule,
    UserInfosRoutingModule
  ]
})
export class UserInfosModule { }

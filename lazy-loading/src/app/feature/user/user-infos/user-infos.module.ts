import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfosRoutingModule } from './user-infos-routing.module';
import { UserInfosComponent } from './user-infos.component';
import { UserInfosDetailsComponent } from './user-infos-details/user-infos-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UserInfosComponent, UserInfosDetailsComponent],
  imports: [
    CommonModule,
    UserInfosRoutingModule,
    SharedModule
  ]
})
export class UserInfosModule { }

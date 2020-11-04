import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInfosComponent } from './user-infos.component';

const routes: Routes = [{ path: '', component: UserInfosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInfosRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent,
  children: [
    { path: 'infos', loadChildren: () => import('./user-infos/user-infos.module').then(m => m.UserInfosModule) },
    { path: 'contact', loadChildren: () => import('./user-contact/user-contact.module').then(m => m.UserContactModule) },
    { path: 'preferences', loadChildren: () => import('./user-preferences/user-preferences.module').then(m => m.UserPreferencesModule) }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

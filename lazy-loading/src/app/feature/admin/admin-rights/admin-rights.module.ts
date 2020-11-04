import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRightsRoutingModule } from './admin-rights-routing.module';
import { AdminRightsComponent } from './admin-rights.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AdminRightsComponent],
  imports: [
    CommonModule,
    AdminRightsRoutingModule,
    SharedModule
  ]
})
export class AdminRightsModule { }

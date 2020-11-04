import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRightsRoutingModule } from './admin-rights-routing.module';
import { AdminRightsComponent } from './admin-rights.component';


@NgModule({
  declarations: [AdminRightsComponent],
  imports: [
    CommonModule,
    AdminRightsRoutingModule
  ]
})
export class AdminRightsModule { }

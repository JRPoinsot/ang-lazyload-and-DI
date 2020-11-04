import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DumbService } from 'src/app/core/services/dumb.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [DumbService]
})
export class AdminModule { }

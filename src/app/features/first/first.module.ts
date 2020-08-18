import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { SharedModule } from '../../shared/shared.module';
import { FirstAComponent } from './first-a/first-a.component';
import { FirstBComponent } from './first-b/first-b.component';


@NgModule({
  declarations: [FirstComponent, FirstAComponent, FirstBComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    SharedModule
  ]
})
export class FirstModule { }

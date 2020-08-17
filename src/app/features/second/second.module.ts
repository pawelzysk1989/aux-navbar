import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, SecondRoutingModule, SharedModule],
})
export class SecondModule {}

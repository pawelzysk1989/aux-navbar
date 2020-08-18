import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';
import { SharedModule } from '../../shared/shared.module';
import { SecondAComponent } from './second-a/second-a.component';
import { SecondBComponent } from './second-b/second-b.component';

@NgModule({
  declarations: [SecondComponent, SecondAComponent, SecondBComponent],
  imports: [CommonModule, SecondRoutingModule, SharedModule],
})
export class SecondModule {}

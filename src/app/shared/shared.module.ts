import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavContentDirective } from './side-nav-content.directive';

@NgModule({
  declarations: [SideNavContentDirective],
  exports: [SideNavContentDirective],
  imports: [CommonModule],
})
export class SharedModule {}

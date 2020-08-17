import { SideNavService } from './../services/side-nav.service';
import { Directive, TemplateRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appSideNavContent]',
})
export class SideNavContentDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private sideNavService: SideNavService
  ) {}
  ngOnInit(): void {
    this.sideNavService.setTemplate(this.templateRef);
  }

  ngOnDestroy(): void {
    this.sideNavService.setTemplate(null);
  }
}

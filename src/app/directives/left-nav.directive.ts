import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLeftNav]',
})
export class LeftNavDirective {
  constructor(private vcr: ViewContainerRef) {}

  @Input() set appLeftNav(template: TemplateRef<any> | null) {
    this.vcr.clear();
    if (template) {
      this.vcr.createEmbeddedView(template);
    }
  }
}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLeftNav]',
})
export class LeftNavDirective {
  @Input() set appLeftNav(template: TemplateRef<any> | null) {
    if (template) {
      this.vcr.createEmbeddedView(template);
    } else {
      this.vcr.clear();
    }
  }
}

import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  private templateSubject = new BehaviorSubject<TemplateRef<any> | null>(null);

  template$ = this.templateSubject.asObservable();

  setTemplate(template: TemplateRef<any> | null): void {
    this.templateSubject.next(template);
  }
}

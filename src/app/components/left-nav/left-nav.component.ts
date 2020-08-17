import { SideNavService } from './../../services/side-nav.service';
import { Component, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftNavComponent {
  template$: Observable<TemplateRef<any> | null>;
  constructor(private sideNavService: SideNavService) {
    this.template$ = this.sideNavService.template$;
  }
}

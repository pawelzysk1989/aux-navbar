import { FirstBComponent } from './first-b/first-b.component';
import { FirstAComponent } from './first-a/first-a.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [
      {
        path: '',
        component: FirstAComponent,
      },
      {
        path: 'b',
        component: FirstBComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}

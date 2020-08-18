import { SecondBComponent } from './second-b/second-b.component';
import { SecondAComponent } from './second-a/second-a.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondComponent } from './second.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
    children: [
      {
        path: '',
        component: SecondAComponent,
      },
      {
        path: 'b',
        component: SecondBComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondRoutingModule {}

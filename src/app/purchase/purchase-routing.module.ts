import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Purchase1Component } from './purchase1/purchase1.component';
import { Purchase3Component } from './purchase3/purchase3.component';
import { Purchase2Component } from './purchase2/purchase2.component';

const routes: Routes = [
  // { path: '', redirectTo: 'purchase', pathMatch: 'full' },
  {
    path: 'pr1',
    component: Purchase1Component
  },
  {
    path: 'pr2',
    component: Purchase2Component
  },
  {
    path: 'pr3',
    component: Purchase3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }

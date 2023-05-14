import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';

const routes: Routes = [
  // { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: 'p1',
    component: Product1Component
  },
  {
    path: 'p2',
    component: Product2Component
  },
  {
    path: 'p3',
    component: Product3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

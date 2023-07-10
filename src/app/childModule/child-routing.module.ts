import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../childModule/child/child.component';

const routes: Routes = [
  { path: '', redirectTo: 'child', pathMatch: 'full' },
  {
    path: 'child',
    component: ChildComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentmoduleComponent } from '../parentModule/parentmodule/parentmodule.component';

const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  {
    path: 'load-parent',
    component: ParentmoduleComponent,
  },
  {
    path: 'childModule',
    loadChildren: () =>
      import('../childModule/child-module').then((m) => m.childModule),
  },
];
//ek module banaya lazy loading parent wala usme se agar child me jana h jo ki lazy laoding hoga to uska tarika yeh hai
//     ...../parentModule/load-parent
//path to open parent module component
//       ...../parentModule/childModule/load-child
//path to open child module component
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentRoutingModule {}

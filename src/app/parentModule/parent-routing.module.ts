import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentmoduleComponent } from '../parentModule/parentmodule/parentmodule.component';

const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  {
    path: 'parentComp',
    component: ParentmoduleComponent
  },
  {
    path:'childModule',
    loadChildren: ()=> import('../childModule/child-module').then((m)=> m.childModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }

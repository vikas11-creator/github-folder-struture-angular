import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentmoduleComponent } from '../parentModule/parentmodule/parentmodule.component';
import { ParentRoutingModule } from '../parentModule/parent-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ParentRoutingModule
  ],
  declarations: [ParentmoduleComponent]
})
export class ParentModuleModule { }
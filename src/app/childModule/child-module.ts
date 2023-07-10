import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../childModule/child/child.component';
import { ChildRoutingModule } from '../childModule/child-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChildRoutingModule
  ],
  declarations: [ChildComponent]
})
export class childModule { }
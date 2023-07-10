import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../childModule/child/child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChildComponent]
})
export class childModule { }
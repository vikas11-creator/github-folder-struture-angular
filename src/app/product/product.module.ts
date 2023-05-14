import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { AppSharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    Product1Component,
    Product2Component,
    Product3Component
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AppSharedModule//shared module imported 
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { Purchase1Component } from './purchase1/purchase1.component';
import { Purchase2Component } from './purchase2/purchase2.component';
import { Purchase3Component } from './purchase3/purchase3.component';
import { AppSharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    PurchaseComponent,
    Purchase1Component,
    Purchase2Component,
    Purchase3Component,
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    AppSharedModule, //shared module imported
    ProductModule//USE ONE MODULE COMPONENT IN OTHER MODULE
  ],
})
export class PurchaseModule {}
//LET HUME PRODUCT MODULE KA PRODUCT1COMPONENT KISI DUSRE MODULE LET PURCHASE ME USE KRNA HAI
// TO ProductModule COPY KRKE PURCHASE MODULE KE IMPORT ME DAL DO
//BUT YHA SE EXPORT BHI KRNA PADEGA ==>> exports:[Product1Component],
//AB PURCHASE ME <app-product1></app-product1> YEH SELECTOR USE KR SKTE HO

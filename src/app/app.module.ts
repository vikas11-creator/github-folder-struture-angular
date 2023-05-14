import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { coreComponents } from './common-component';
import { rootPages } from './pages';
import { AppSharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ...coreComponents,
    ...rootPages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

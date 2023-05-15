import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { coreComponents } from './common-component';
import { rootPages } from './pages';
import { AppSharedModule } from './shared/shared.module';

export function loadUserInfo() {
  console.log(
    'APP_INITIALIZER:-',
    'this will be logged before page initiallization'
  );
}
@NgModule({
  declarations: [AppComponent, ...coreComponents, ...rootPages],
  imports: [BrowserModule, AppRoutingModule, AppSharedModule],
  providers: [
    {
      provide: APP_INITIALIZER, //app initialize hone se pehle call krega
      useFactory: loadUserInfo, //this is the function jo call krega
      multi: true,
      deps: [], //dependency yha dalo jo function me use hone wala h
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

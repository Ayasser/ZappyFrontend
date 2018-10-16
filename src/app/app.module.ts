import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericTableModule } from '@angular-generic-table/core';
import { TwitterComponent } from './twitter/twitter.component';
import { AppRouting } from './app.routing';
import { AppSettings } from './app.settings';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
  ],
  imports: [
    AppRouting,
    BrowserModule,
    GenericTableModule,
    HttpModule,
  ],
  providers: [
    AppSettings,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

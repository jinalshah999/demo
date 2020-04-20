import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { ViewDemoComponent } from './view-demo/view-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component,
    ViewDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

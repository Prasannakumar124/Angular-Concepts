import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { X1Component } from './x/x1/x1.component';

@NgModule({
  declarations: [
    AppComponent,
    XComponent,
    YComponent,
    X1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AllHooksComponent } from './all-hooks/all-hooks.component';
import { ChildOfchildComponent } from './all-hooks/child-ofchild/child-ofchild.component';

@NgModule({
  declarations: [
    AppComponent,
    AllHooksComponent,
    ChildOfchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

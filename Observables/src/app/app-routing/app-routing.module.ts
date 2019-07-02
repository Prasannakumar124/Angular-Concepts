import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'user/:id',component:UserComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule  
  ],
  declarations: []
})
export class AppRoutingModule { }

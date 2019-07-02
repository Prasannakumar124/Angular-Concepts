import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LifecycleHooks';
  Name:string='prasanna';

  ArrayDetails=[{name:'prasanna',age:26,no:9550335422}]

  constructor(){
    console.log("parent constructor is called");    
  }
  ngOnInit(){
    console.log("parent ngOnInit called");
  }
  fun(){
  console.log("click");
 }

}

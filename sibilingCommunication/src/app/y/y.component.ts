import { Component, OnInit, Input,AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit,AfterContentChecked {
  
  constructor() {
   }
   @Input() data;
   fullobject;
   onlykeys;
   ngOnInit() {
   
   }
   ngAfterContentChecked(){
  // console.log(this.data);
 this.fullobject=this.data;
    this.onlykeys=Object.keys(this.fullobject);

   }
}

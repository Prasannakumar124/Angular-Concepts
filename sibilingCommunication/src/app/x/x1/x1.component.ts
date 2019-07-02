import { Component, OnInit, Output, EventEmitter,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-x1',
  templateUrl: './x1.component.html',
  styleUrls: ['./x1.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class X1Component implements OnInit {
@Output() x1event=new EventEmitter<{name:string,age:Number,salary:Number}>()
  constructor() { 
    console.log("constructor function is called");
    
  }

  ngOnInit() {
    console.log("ng on init is called");
    
  }
  x1function(){
  this.x1event.emit({
    name:"prasanna",
    age:27,
    salary:50000
  })
}

}

import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-child-ofchild',
  templateUrl: './child-ofchild.component.html',
  styleUrls: ['./child-ofchild.component.css']
})
export class ChildOfchildComponent implements OnInit {
  // @Input() DATA;
  @Input() data;
  constructor() { 
    console.log("ChildofChild CONSTRUCTOR is called");

  }

  ngOnInit() {
    console.log("ChildofChild NGONINT is called");
  }
  fun1(){
    console.log("clicked in child of child component");
    }
    
}

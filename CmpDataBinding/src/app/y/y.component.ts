import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {

 @Output() ydata=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  fireevent(){
    this.ydata.emit({name:'y sibiling data'})
  }

}

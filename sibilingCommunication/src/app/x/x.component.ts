import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
@Output() xevent=new EventEmitter()
constructor() { }
 ngOnInit() {  }
xdata:any;
xfunction(e){
  this.xevent.emit(e);
}
}

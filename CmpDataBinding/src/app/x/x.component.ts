import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
  @Input() datafromRoot; 
  @Output() datafromChild=new EventEmitter<{name:string,type:string}>()

@Input() datafromYsibiling;
  constructor() { }

  ngOnInit() {
  }

  fireEvent(e){
    this.datafromChild.emit({
      name:'Data from Child',
      type:'child'
    })
  }
  getDataFromY(e){
    console.log(e.name)
this.datafromYsibiling=e.name;

  }

}

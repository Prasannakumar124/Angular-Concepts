import {
   Component, 
   OnInit, 
   Input,
   OnChanges, 
   SimpleChanges,
    DoCheck, 
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild,
   } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,OnDestroy {
  
  @Input()element:{type: string,name:string,content:string}
  @Input() name;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('paracontent') paragraphcontent:ElementRef;
  constructor() {
    console.log("constructor function is called")
  }
  ngOnInit() {
    console.log("ngOninit function is called");
    console.log('Text Content :'+ this.header.nativeElement.textContent);
    console.log("Text Content of para:" + this.paragraphcontent.nativeElement.textContent);
    
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges Function is called");
    console.log(changes);
  }
  ngDoCheck(){
    console.log("ng Docheck is called");
  }
ngAfterContentInit(){
  console.log("ng AfterContent Init is called");
  console.log("Text Content of para:" + this.paragraphcontent.nativeElement.textContent);
}
ngAfterContentChecked(){
  console.log("ngAfterContent Checked is called");
}
ngAfterViewInit(){
  console.log("ngAfterViewInit is called");
  console.log('Text Content :'+ this.header.nativeElement.textContent);
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked is called");
}
ngOnDestroy(){
  console.log("ngOnDestroy is called");
}
}

import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentInit ,
  ElementRef,
  ContentChild,
  AfterContentChecked,
  ViewChild,
  OnDestroy,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-all-hooks',
  templateUrl: './all-hooks.component.html',
  styleUrls: ['./all-hooks.component.css']
})
export class AllHooksComponent implements OnInit,OnChanges,DoCheck,
AfterContentInit,AfterViewChecked,AfterContentChecked,OnDestroy{
// Name="prasanna";
// newServerContent="nodeJS server"
arraydata=["prasanna",26];
@Input() datafromParent:String;
@ContentChild('paracontent') paragraphcontent:ElementRef;
@ViewChild('heading') header:ElementRef;
// onadd(localref:HTMLInputElement){
//   this.newServerContent=localref.value;
// }
ondestroyFirst(){
  this.arraydata.splice(0,2);
}
  constructor() {
    console.log(" child Constructor function is called"); 
   }
  ngOnInit() {
    console.log("child ngOnInit function called");
    // console.log('Text Content :'+ this.header.nativeElement.value);
    // console.log("paragraph content :"+this.paragraphcontent.nativeElement.textContent);
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnchange function called');
    console.log(changes);
  }
  ngDoCheck(){
    console.log("ngDocheck function is called");
  }
  ngAfterContentInit(){
    console.log("NgAfterContentInit is Called");
    console.log("paragraph content : "+ this.paragraphcontent.nativeElement.textContent); 
  }
  ngAfterContentChecked(){
    console.log("ngAfterContent Checked is called");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit is called");
    // console.log('Text Content : '+ this.header.nativeElement.value);
  }
  ngAfterViewChecked(){
  console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
      console.log("NGDestroy component is called");    
  }
}

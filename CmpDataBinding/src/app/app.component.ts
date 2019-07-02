import { Component,Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output() YNewEvent=new EventEmitter()
  ynewData;
  childdatap1:Object={};
  serverElements = [{type:'server',name:'TestServer', content:'just a test'}];
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    console.log(serverData);
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }
  onBlueprintcreated(blueprintdata:{serverName:string,serverContent:string}){
    console.log(blueprintdata);
    this.serverElements.push({
      type:'blueprint',
      name:blueprintdata.serverName,
      content:blueprintdata.serverContent
    })
  }
 rcd={name:'Root Component Data',type:'main'}
 keyss:Array<string>
 getdata(e){
  //  console.log(e);
  this.childdatap1=e
  this.keyss= Object.keys(this.childdatap1);
 }

//  keys() : Array<string> {
//   return Object.keys(this.childdatap1);
// }

changeData(){
this.serverElements[0].name="changed !"
}

ondestroyFirst(){
this.serverElements.splice(0,1);
}


sibilingevent(event){
  this.ynewData=event.name
  // console.log(event)
// this.YNewEvent.emit(
// );
}

}

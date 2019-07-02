import { Component, OnInit, EventEmitter, Input,Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit {
 @Output() servercreated= new EventEmitter<{serverName:string,serverContent:string}>()
 @Output() blueprintcreated=new EventEmitter<{serverName:string,serverContent:string}>()
  newServerName = '';
  newServerContent = '';
 
  @ViewChild('serverContentInput') servercontent:ElementRef

  constructor() { }

  ngOnInit() {
  }
  // onAddServer() {
  //   this.servercreated.emit({
  //     serverName:this.newServerName,
  //     serverContent:this.newServerContent
  //   })
  // }

  onAddServer(localref:HTMLInputElement) {
    this.servercreated.emit({
      serverName:localref.value,
      // serverContent:this.newServerContent
      serverContent:this.servercontent.nativeElement.value
    })
  }

  onAddBlueprint() {
    this.blueprintcreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
}

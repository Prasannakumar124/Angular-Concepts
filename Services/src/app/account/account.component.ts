import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../Logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService,AccountService]
  // providers:[LoggingService]

})
export class AccountComponent implements OnInit {
@Input() Account:{name:string,status:string};
@Input() id:number;
// @Output() statuschanged=new EventEmitter<{id:number,newstatus:string}>()
  // constructor(private loggingservies:LoggingService,
  //             private accountservices:AccountService
  //   ) { }
    constructor(private accountservices:AccountService) { }

  ngOnInit() {
  }

  onSetTo(status:string){
    // this.statuschanged.emit({
    //   id:this.id,
    //   newstatus:status
    // })
    this.accountservices.updatestatus(this.id,status);
    // this.loggingservies.loggingstatuschange(status);
    // console.log('A server status changed, new status: ' + status);
    this.accountservices.statuschanger.emit(status);
  }
}

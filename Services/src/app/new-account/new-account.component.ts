import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../Logging.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService,AccountService]
  // providers:[LoggingService]

})
export class NewAccountComponent implements OnInit{
  // @Output() accountAdded=new EventEmitter<{name:string,status:string}>()

  // constructor(private loggingServices:LoggingService,
  //             private accountservice:AccountService
  //   ) { }

  constructor(private accountservice:AccountService) { 
  this.accountservice.statuschanger.subscribe(
    alert(status)
    // (status:string)=>{
    //   alert('new status:'+status);
    // }
  )
}

  ngOnInit() {
  }
  onCreateAccount(accountName:string,accountStatus:string){
    // this.accountAdded.emit({
    //   name:accountName,
    //   status:accountStatus
    // })
    /*
    // First Way

step1 import service file here
step2 create new instance for service
step3 call that method here and pass parameters to it

Note: But these not the best method to do it

 */
// const logserve=new LoggingService();
// logserve.loggingstatuschange(accountStatus);

// console.log('A server status changed, new status: ' + accountStatus);

//Two ways
// this.loggingServices.loggingstatuschange(accountStatus);

this.accountservice.addAccount(accountName,accountStatus);
  }
}

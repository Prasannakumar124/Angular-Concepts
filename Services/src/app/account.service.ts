import {Injectable, EventEmitter} from '@angular/core'
import { LoggingService } from './Logging.service';
@Injectable()
export class AccountService{
    constructor(private loggingservice:LoggingService){ }
  statuschanger=new EventEmitter<string>()
    accounts=[
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      addAccount(Name:string,Status:string){
        this.accounts.push({name:Name,status:Status})
        this.loggingservice.loggingstatuschange(status)
      }
      updatestatus(id:number,newstatus:string){
        this.accounts[id].status=newstatus;
        this.loggingservice.loggingstatuschange(newstatus);
      }
}

/*
Injecting service into other services:
For that we should have a meta data as we have for component@componen For Directive@Directive 
similar way for services @Injectable()these should added where otherservice is needed

*/

/*
using service for cross communication of component:
1.creat EventEmitter in services file
2.use it account.ts file emit(status)
3.use it newaccount.ts use subscribe method

 */

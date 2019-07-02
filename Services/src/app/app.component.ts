import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent implements OnInit{
  title = 'Services';
  accounts:{name:string,status:string}[]=[];
  constructor(private accountservice:AccountService){}
   ngOnInit(){
     this.accounts=this.accountservice.accounts;
  }
  // accounts=[
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];
  // onAccountAdded(newaccount:{name:string,status:string}){
  //   // this.accounts.push(newaccount);
  // }  
  // onStatusChanged(updateinfo:{id:number,newstatus:string}){
  //   // this.accounts[updateinfo.id].status=updateinfo.newstatus;
  // }
}

/* login and datastorage */



/*
Q:problem when new account is addeding data is not displayed
 in account-componet file bcz of hierarcial injector

FOR Account Services we have 3 instances 
 1.app.component.ts====it recives own instance of service 
 and as well as to all its child component
 
 Note: The problem is in 2.newaccount.component again we created another instances
        bcz of these it over rides the instance we get from app component
        Similar way in 3.account.component.ts
A:to over these problem we remove account service file from providers array of newaccount component and accountcomponent




*/
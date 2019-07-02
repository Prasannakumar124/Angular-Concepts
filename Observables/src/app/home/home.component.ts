import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {interval} from 'rxjs'
// import 'rxjs/Rx'
import { map } from 'rxjs/operators';
import { Observer } from 'rxjs';
import { UserService } from '../user/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
myObservablesubscription:Subscription
DATA;

  constructor(private userservice:UserService) {
    //  const obs=Observable;

    const myNumbers=interval(1000).pipe(map((number:number)=>{ return number * 2}));
       
     myNumbers.subscribe(
       (number:Number)=>{console.log(number);
       }
     )
    // this.userservice.emiter.subscribe(
    //   (DATA:string)=>{
    //     // console.log(data);
    //     // alert(DATA)
    //     this.DATA=DATA;
    //     console.log(this.DATA);  
    //     // document.write(this.DATAaboutdata)     
    //   }
    // )
    
  }
  ngOnInit() {
    this.userservice.useravtivated$.subscribe(
      (DATA:string)=>{
          this.DATA=DATA;
        console.log(this.DATA);
      }
    )  
    // this.userservice.userActivated.subscribe(
    //   (DATA:string)=>{
    //     if(DATA){
    //       this.DATA=DATA
    //     }
    //   }
    // )
    const myObservable=Observable.create((observer:Observer<string>)=>{
     setTimeout(()=>{observer.next('First package')},2000)
     setTimeout(()=>{observer.next('second package')},4000)
     setTimeout(()=>{observer.error('these wont get executed')},5000)
     setTimeout(()=>{observer.complete()},6000)
     setTimeout(()=>{observer.next('fourth package')},8000)
   });
 this.myObservablesubscription=myObservable.subscribe(
     (data:string)=>{
      // this.DATAaboutdata=data; 
      console.log(data)},
     (error:string)=>{console.log(error)},
     ()=>{console.log('complete')});
  }
  ngOnDestroy(){
    this.myObservablesubscription.unsubscribe();
  }
  a() {
    console.log(this.DATA);
    this.userservice.useravtivated$.subscribe((data) => {
      console.log(data);
    })
  }

}
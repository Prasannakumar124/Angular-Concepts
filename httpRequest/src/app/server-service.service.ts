import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import 'rxjs/Rx'
import { map,catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

  constructor(private http:Http) { }
  storeServers(servers:any[]){
    const header= new Headers({'content-Type':'Application/json'})
    /*Post Method */

    // return this.http.post('https://httpproject-3d7c6.firebaseio.com/data.json',
    // servers,{headers:header})

    /*Put Method */
    return this.http.put('https://httpproject-3d7c6.firebaseio.com/data.json',
    servers,{headers:header})
  }
  // getservers(){
  //    return this.http.get('https://httpproject-3d7c6.firebaseio.com/data.json')
  // }
/*Extracting data here instead of using in multiple components where this method are
 using  using mao operator*/
  getservers(){
    return this.http.get('https://httpproject-3d7c6.firebaseio.com/data.json')
    .pipe(
      map((res:Response)=>{
      const data=res.json()
      for(const server of data){
        server.name="Fetched--" + server.name;
      }
      return data;
    }))
    .pipe(catchError(
      (error:Response)=>{return  throwError('Something went wrong')}))  
 }
 getApplicationName(){
  return this.http.get('https://httpproject-3d7c6.firebaseio.com/AppName.json')
   .pipe(
     map(
       (res:Response)=>{
         return res.json();
       }
     )
   )
 }
}

import { EventEmitter } from "@angular/core";
import { Subject, ReplaySubject, Observable } from "rxjs";

export class UserService {
    
    userActivated=new ReplaySubject(1);
    useravtivated$=this.userActivated.asObservable()



    Message(msg:string){
this.userActivated.next(msg)
}

emiter=new EventEmitter<string>()
}

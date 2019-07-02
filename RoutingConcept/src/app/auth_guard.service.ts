import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './authservice';
@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild{
    constructor(private authservice:AuthService,private router:Router){}
canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{

return this.authservice.isAuthendicated().then(
    (authenticated:boolean)=>{
        if(authenticated){return true;}
        else{
            this.router.navigate(['/']);
        }
    })
}
canActivateChild(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
return this.canActivate(router,state)
}
}
import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardService } from "./auth_guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.services";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes:Routes=[
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'users',component:UsersComponent,children:[
      {path:':id/:name',component:UserComponent},
    ]},
    {path:'servers',
    // canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    component:ServersComponent,
    children:[
      {path:':id',component:ServerComponent,resolve:{serverdata:ServerResolver}},
      {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]}
    ]},
    // {path:'not-found',component:PagenotfoundComponent},
    {path:'not-found',component:ErrorPageComponent,data:{Message:'Page Not Found'}},
    {path:'**',redirectTo:'/not-found'}
  ]
@NgModule({
    imports:[
      // RouterModule.forRoot(appRoutes),
      RouterModule.forRoot(appRoutes,{useHash:true}),

    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
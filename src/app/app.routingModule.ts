
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './user/users/users.component';
import { ServersComponent } from './server/servers/servers.component';
import {  RouterModule, Routes } from '@angular/router';
import { ServerComponent } from './server/servers/server/server.component';
import { UserComponent } from './user/users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { AuthguardService } from './authGuard';
import { CanDeactivateGuard } from './Services/canDeactivate.Service';

const appRouter:Routes =[
    {path:'', component:HomeComponent},
    {path:'users', component:UsersComponent,children:[
      {path:':id/:name', component:UserComponent}
    ]},
    // canActivate:[AuthguardService]  canActivateChild:[AuthguardService]
    {path:'servers',
    canActivate:[AuthguardService] 
   
    ,component:ServersComponent, children:[
      {path:':id', component:ServerComponent},
      {path:':id/edit', component:EditServerComponent,canDeactivate:[CanDeactivateGuard]}
    ]},
  
    {path:'not-found', component:PageNotFoundComponent },
    {path:'**', redirectTo:'/not-found'}
  ]

  
@NgModule({
    imports:[
        RouterModule.forRoot(appRouter)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutesModule{

}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './user/users/users.component';
import { ServersComponent } from './server/servers/servers.component';
import {  RouterModule, Routes } from '@angular/router';
import { ServersService } from './Services/server.service';
import { ServerComponent } from './server/servers/server/server.component';
import { UserComponent } from './user/users/user/user.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutesModule } from './app.routingModule';
import { AuthService } from './authService';
import { AuthguardService } from './authGuard';
import { CanDeactivateGuard} from './Services/canDeactivate.Service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServerResolver } from './Services/ResolverService';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    EditServerComponent,
    ServersComponent,
    ServerComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorMessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [ServersService,AuthService, AuthguardService,CanDeactivateGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

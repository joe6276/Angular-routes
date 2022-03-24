import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { ServersService } from "./server.service";  
  @Injectable()
  export class ServerResolver implements Resolve<any> {
    constructor(private serversService: ServersService) {}
        resolve(route: ActivatedRouteSnapshot) {
            return this.serversService.getServer(+route.params['id'])
            
        }
  }
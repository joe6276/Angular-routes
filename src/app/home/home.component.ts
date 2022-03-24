import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authService';
import { Server } from '../Intefaces/server';
import { ServersService } from '../Services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 server!:Server[]

  constructor(private router:Router, private serverService :ServersService, private authService:AuthService) { }
  loadServers(){
    this.router.navigate(['/servers'])
  }
  ngOnInit(): void {
    // this.server=this.serverService.getServers()
    // console.log(this.server)
  }

  onLogin() {
    this.authService.login();
  }
  
  onLogout() {
    this.authService.logout();
  }

}




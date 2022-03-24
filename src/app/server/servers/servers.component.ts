import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from 'src/app/Services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];
  constructor(private serversService:ServersService,
            private route:ActivatedRoute,
            private router:Router
    ) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }
  loadServer(){
    this.router.navigate(['servers'], {relativeTo:this.route})

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from 'src/app/Services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
id:number=0;
name:string='';
status:string=''

// server: {id: number, name: string, status: string} ;


  constructor( private serversService:ServersService,
    private route:ActivatedRoute,
    private router:Router

    ) { }

    onEdit(){
      this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling:'preserve'})
    }
  ngOnInit(): void {

    const id = +this.route.snapshot.params['id']
    console.log(id);
    
    const svs = this.serversService.getServer(id);
    this.name= svs!.name
    this.status= svs!.status

    this.route.params.subscribe(
    (params:Params)=>{
      this.serversService.getServer(+params['id']);
    }
    )
  }

}

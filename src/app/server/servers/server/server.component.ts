import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Server } from 'src/app/Intefaces/server';
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

 server!:Server;


  constructor( private serversService:ServersService,
    private route:ActivatedRoute,
    private router:Router

    ) { }

    onEdit(){
      this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling:'preserve'})
    }
  ngOnInit(): void {

    // const id = +this.route.snapshot.params['id']
    // const svs = this.serversService.getServer(id);
    // this.name= svs!.name
    // this.status= svs!.status
    // // this.server= this.serversService.getServer(id)
    // //   console.log(this.server);
      
    // this.route.params.subscribe(
    // (params:Params)=>{
    //   this.serversService.getServer(+params['id']);
    // }


    // )


    
    const id = +this.route.snapshot.params['id']
    console.log(id);
    this.route.data.subscribe(
      (data:Data)=>{
        console.log(data)
        this.name= data['server'].name
        this.status= data['server'].status
      }
    )
  }

}

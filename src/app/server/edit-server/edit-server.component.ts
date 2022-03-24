import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from 'src/app/Intefaces/server';
import { CanDeactivateGuard } from 'src/app/Services/canDeactivate.Service';
import { ServersService } from 'src/app/Services/server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanDeactivateGuard {

  serverName = '';
  serverStatus = '';
  allowEdit=false;
  changesSaved=false;

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ( !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
 


  constructor(private serversService: ServersService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit= queryParams['allowEdit']==='1'? true:false
      }
    )
  
  }

  onUpdateServer() {

    const id= +this.route.snapshot.params['id']
    console.log(id)
    this.serversService.updateServer(id, {name: this.serverName, status: this.serverStatus});
   this.changesSaved=true
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}

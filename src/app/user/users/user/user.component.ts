import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { Subscription } from 'rxjs/Subscription';
import{ User } from '../../../Intefaces/user'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {
 userID=''
 name=''
 users:User={} as User
// paramsSubscription:Subscription
  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.users.id= this.route.snapshot.params['id']
    this.users.name= this.route.snapshot.params['name']

this.route.params.subscribe( (params:Params)=>{
      this.users.id=params['id']
       this.users.name=params['name']
     }
   )
  

  }



}

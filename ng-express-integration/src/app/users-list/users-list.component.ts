import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  title='Users List';
  users:any[];
  message='';  

  constructor(private us:UsersService) { 
    console.log("####      UsersListComponent created           #####")
  }

  ngOnInit() {
    this.getAllUsers();
    console.log("####      UsersListComponent initialization           #####")
  
  }
  ngOnDestroy() {
    console.log("####      UsersListComponent destroyed           #####")
   }
   
   getAllUsers(){

    this.us.getAllUsers()
           .subscribe(response=>this.users=response,error=>this.message=error);

   }






}

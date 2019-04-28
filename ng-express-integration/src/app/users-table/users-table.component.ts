import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

    title='User Table';
    users:any[];
    message='';
    

    constructor(private us:UsersService) { 
      console.log("####      UsersTableComponent created           #####")
    }

    ngOnInit() {
      this.getAllUsers();
      console.log("####      UsersTableComponent initialization           #####")
    
    }
    ngOnDestroy() {
      console.log("####      UsersTableComponent destroyed           #####")
    }

    getAllUsers(){

      this.us.getAllUsers()
            .subscribe(response=>this.users=response,error=>this.message=error);

    }


}

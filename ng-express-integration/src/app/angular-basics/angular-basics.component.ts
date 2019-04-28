import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent implements OnInit,OnDestroy {

  title='Angular Basics';
  colors=['RED','MAGENTA','GREEN','BLUE'];
  day=1;
  min=1;
  max=8;
  show=true;
  hide=false;
  
  today=new Observable<string>((s:Subscriber<string>)=>{
   setInterval(()=>{
      s.next(new Date().toLocaleString());
    },1000)
   });




  employee={id:101,
            name:'Pradeep chinchole',
            salary:123455.343545,
            variable:0.15,
            doj:new Date("February 01,2017"),
            mobile:'9158652627',
            pan:'amxfd9834r'
            };
       

            showHide(){
              this.hide=!this.hide;
            }









  constructor() { 
    console.log("####      AngularBasicsComponent created           #####")
  }

  ngOnInit() {
    console.log("####      AngularBasicsComponent initialization           #####")
  
  }
  ngOnDestroy() {
    console.log("####      AngularBasicsComponent destroyed           #####")
   }

}

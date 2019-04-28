import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directvies',
  templateUrl: './custom-directvies.component.html',
  styleUrls: ['./custom-directvies.component.css']
})
export class CustomDirectviesComponent implements OnInit {

  fcolor="red";
  bcolor='wheat';


  show=true;
  hide=false;
  



  constructor() { }

  ngOnInit() {
  }

}

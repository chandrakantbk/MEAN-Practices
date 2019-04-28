import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

 name='INDIA';

 stateName='';

 cityName='';


 
  constructor() { 
    console.log("####      CountryComponent created           #####")
  }

  ngOnInit() {
    console.log("####      CountryComponent initialization           #####")
  
  }
  ngOnDestroy() {
    console.log("####      CountryComponent destroyed           #####")
   }

}

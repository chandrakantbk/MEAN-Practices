import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  name='PUNE';

  @Input()
  countryName='';
 
  @Input()
  stateName='';
 
 
  @Output()
  cityChanged=new EventEmitter<string>();

  
   constructor() { 
     console.log("####      CountryComponent created           #####")
   }
 
   ngOnInit() {
     console.log("####      CountryComponent initialization           #####")
   
   }
   ngOnDestroy() {
     console.log("####      CountryComponent destroyed           #####")
    }


    sendCityToState(){
      console.log("In city Changed :"+name);
      this.cityChanged.emit(this.name);
    }


}

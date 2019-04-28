import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  name='MAHARASHTRA';

  @Input()
  countryName='';
 
  cityName='';
 

  @Output()
  cityChanged=new EventEmitter<string>();

  @Output()
  stateChanged=new EventEmitter<string>();

 
  
   constructor() { 
     console.log("####      CountryComponent created           #####")
   }
 
   ngOnInit() {
     console.log("####      CountryComponent initialization           #####")
   
   }
   ngOnDestroy() {
     console.log("####      CountryComponent destroyed           #####")
    }

    
    sendCityToCountry(value){
      console.log("In city Changed :"+this.cityName);
      this.cityName=value;
      this.cityChanged.emit(value);

    }

    sendStateToCountry(){
      console.log("In sendStatecity Changed :"+this.name);
      this.stateChanged.emit(this.name);
    }

}

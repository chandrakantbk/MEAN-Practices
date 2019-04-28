import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NumberComponent } from '../number/number.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { NgShowDirective } from '../directives/ng-show.directive';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {


  @ViewChild(NumberComponent)
  private numberComponent: NumberComponent;

  
  @ViewChild(StopwatchComponent)
  private stopwatchComponent: StopwatchComponent;
  

  @ViewChild(NgShowDirective)
  private s:NgShowDirective;



 @ViewChild("name")
 private n:ElementRef;

 @ViewChild("city")
 private c:ElementRef;



    increase() {
       this.numberComponent.increaseByOne();
    }
    decrease() {
       this.numberComponent.decreaseByOne();
    }


    start(){

      this.stopwatchComponent.start();

    }


    stop(){
      this.stopwatchComponent.stop();
      
    }


    hide(){
      this.s.ngShow=false;
    }

change(){
   this.n.nativeElement.style.backgroundColor = 'cyan';
   this.n.nativeElement.style.color = 'red';	   
   this.c.nativeElement.style.backgroundColor = 'yellow';
   this.c.nativeElement.style.color = 'brown';	   
}



  constructor() { }

  ngOnInit() {
  }

}

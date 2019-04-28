import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//where to inject
  templateUrl: './app.component.html',//where to display
  //template:'<h2>{{title}}</h2>',
  styleUrls: ['./app.component.css']//how to display
})
export class AppComponent {
  title = 'angular7-app';//what to display
}

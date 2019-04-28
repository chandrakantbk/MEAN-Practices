import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent  {

title='Top 5 technologies';

technologies=[
  {id:101,title:'Angular',likes:0,dislikes:0},
  {id:102,title:'Spring Boot',likes:0,dislikes:0},
  {id:103,title:'Python',likes:0,dislikes:0},
  {id:104,title:'AI',likes:0,dislikes:0},
  {id:105,title:'Machine Learning',likes:0,dislikes:0},
];

incrementLikes(t){
  t.likes++;
}

incrementDislikes(t){
  t.dislikes++;
}


  constructor() { 
    console.log("####      TechnologiesComponent created           #####")
  }

  ngOnInit() {
    console.log("####      TechnologiesComponent initialization           #####")
  
  }
  ngOnDestroy() {
    console.log("####      TechnologiesComponent destroyed           #####")
   }

}

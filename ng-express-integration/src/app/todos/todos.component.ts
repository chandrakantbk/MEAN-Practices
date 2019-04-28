import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { PagerService } from '../services/pager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = 'User Comments';
  todos: any[];
  message = '';


  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  userId = 0

  constructor(private ts: TodosService, private pagerService: PagerService, private route: ActivatedRoute) {
    console.log("####      TodosComponent created           #####")
  }

  ngOnInit() {

    this.userId = this.route.snapshot.queryParams.userId;

    if (this.userId)
      this.getAllToDosByUserId()
    else
      this.getAllToDos();
    console.log("####      TodosComponent initialization           #####")
  }

  ngOnDestroy() {
    console.log("####      TodosComponent destroyed           #####")
  }
  getAllToDos() {
    this.ts.getAllToDos()
      .subscribe(response => {
        this.todos = response;
        this.setPage(1);
      }, error => this.message = error);
  }

  getAllToDosByUserId() {
    this.ts.getAllToDosByUserId(this.userId)
      .subscribe(response => {
        this.todos = response;
        this.setPage(1);
      }, error => this.message = error);
  }

  setPage(page: number) {
    // get pager object from service      
    this.pager = this.pagerService.getPager(this.todos.length, page);

    // get current page of items
    this.pagedItems = this.todos.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}

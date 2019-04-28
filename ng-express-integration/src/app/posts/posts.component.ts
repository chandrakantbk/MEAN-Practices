import { PagerService } from './../services/pager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = 'User Post';
  posts: any[];
  post: any
  message = '';

  userId = 0;
  postId = 0;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private ps: PostsService, private route: ActivatedRoute, private pagerService: PagerService, private router: Router) {
    console.log("####      PostsComponent created           #####")
  }

  ngOnInit() {

    this.postId = this.route.snapshot.params.postId;

    if (this.postId) {
      console.log("Individual POst");
      
      this.getPostsById();
    }
    else {
      this.userId = this.route.snapshot.queryParams.userId;
      console.log("####      PostsComponent initialization           #####" + this.userId);

      if (this.userId)
        this.getAllPostsByUserId();
      else
        this.getAllPosts();
    }
  }

  ngOnDestroy() {
    console.log("####      PostsComponent destroyed           #####")
  }

  getAllPosts() {
    this.ps.getAllPosts()
      .subscribe(response => {
        this.posts = response;
        this.setPage(1);
      }, error => this.message = error);
  }

  getPostsById() {
    this.ps.getPostsById(this.postId)
      .subscribe(response => {
        this.post = response;
        this.setPage(1);
      }, error => this.message = error);
  }

  getAllPostsByUserId() {
    this.ps.getAllPostsByUserId(this.userId)
      .subscribe(response => {
        this.posts = response;
        this.setPage(1);
      }, error => this.message = error);
  }

  showComments(postId: number) {
    this.router.navigate(['/casestudy/comments'], { queryParams: { postId: postId } })
  }


  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.posts.length, page);

    // get current page of items
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



}

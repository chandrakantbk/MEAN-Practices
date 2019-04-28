import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseURL="https://jsonplaceholder.typicode.com/posts";
  
  constructor(private http:HttpClient) {
    console.log("PostsService created....");
   }

   getAllPosts():Observable<any> {
    return this.http.get(this.baseURL);
   }

   getAllPostsByUserId(userId:number):Observable<any> {
    return this.http.get(this.baseURL+"?userId="+userId);
   }

   getPostsById(postId:number):Observable<any> {
     return this.http.get(this.baseURL +"/"+postId);
   }

}

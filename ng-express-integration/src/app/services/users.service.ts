import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL="https://jsonplaceholder.typicode.com/users";
  
  constructor(private http:HttpClient) {
    console.log("UsersService created....");
   }

   getAllUsers():Observable<any> {
    return this.http.get(this.baseURL);
   }

   getUserByUserId(userId:number):Observable<any> {
    return this.http.get(this.baseURL+"/"+userId);
   }


}

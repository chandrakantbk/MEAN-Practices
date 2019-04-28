import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private baseURL="https://jsonplaceholder.typicode.com/photos";
  
  constructor(private http:HttpClient) {
    console.log("PhotosService created....");
   }

   getAllPhotos():Observable<any> {
    return this.http.get(this.baseURL);
   }

   getAllPhotosByAbumId(albumId:number):Observable<any> {
    return this.http.get(this.baseURL+"?albumId="+albumId);
   }
}



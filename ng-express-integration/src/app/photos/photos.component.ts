import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  title = 'User Photos';
  photos: any[];
  message = '';
albumId=0;
    // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];


  constructor(private ps: PhotosService, private pagerService:PagerService, private route:ActivatedRoute) {
    console.log("####      PhotosComponent created           #####")
  }

  ngOnInit() {

    this.albumId = this.route.snapshot.queryParams.albumId;

    if(this.albumId)
this.getAllPhotosByAbumId()
    else
    this.getAllPhotos();
    console.log("####      PhotosComponent initialization           #####")
  }

  ngOnDestroy() {
    console.log("####      PhotosComponent destroyed           #####")
  }

  getAllPhotos() {
    this.ps.getAllPhotos()
      .subscribe(response =>  {
        this.photos = response;
        this.setPage(1);
      }, error => this.message = error);
  }

  getAllPhotosByAbumId() {
    this.ps.getAllPhotosByAbumId(this.albumId)
      .subscribe(response =>  {
        this.photos = response;
        this.setPage(1);
      }, error => this.message = error);
  }

  setPage(page: number) {
    // get pager object from service      
    this.pager = this.pagerService.getPager(this.photos.length, page);

    // get current page of items
    this.pagedItems = this.photos.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

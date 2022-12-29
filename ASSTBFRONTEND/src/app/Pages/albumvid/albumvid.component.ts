import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedServiceService } from 'src/app/services/SharedServiceService';

@Component({
  selector: 'app-albumvid',
  templateUrl: './albumvid.component.html',
  styleUrls: ['./albumvid.component.css']
})
export class AlbumvidComponent implements OnInit {
  id:any;
 
  albumList:any=[];
  id2:any;
  constructor(private route : ActivatedRoute,private service:SharedServiceService) { }

  ngOnInit(): void {
    this.id2=this.route.snapshot.params['id'];
    this.videoalbum();
  }
  videoalbum(){
    this.service.getalbumvid(this.id2).subscribe(data=>{
      this.albumList=data;
    })
  }

}

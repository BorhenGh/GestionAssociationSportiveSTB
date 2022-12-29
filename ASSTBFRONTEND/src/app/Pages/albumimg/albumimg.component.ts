import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedServiceService } from 'src/app/services/SharedServiceService';
@Component({
  selector: 'app-albumimg',
  templateUrl: './albumimg.component.html',
  styleUrls: ['./albumimg.component.css']
})
export class AlbumimgComponent implements OnInit {
  id:any;

  albumList:any=[];
  id2:any;
  constructor(private route : ActivatedRoute,private service:SharedServiceService) { }

  ngOnInit(): void {
    this.id2=this.route.snapshot.params['id'];
    this.imgalbum();
    console.log(this.id2);
  }
  imgalbum(){
    this.service.getalbumimg(this.id2).subscribe(data=>{
      this.albumList=data;
    })
  }

}

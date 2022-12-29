import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  Listalbums:any=[];

  constructor(private service:SharedServiceService) { }

  ngOnInit(): void {
    this.Listalbum();
  }
Listalbum(){
  this.service.getalbum().subscribe(data=>{
    this.Listalbums=data;
  })

}
}

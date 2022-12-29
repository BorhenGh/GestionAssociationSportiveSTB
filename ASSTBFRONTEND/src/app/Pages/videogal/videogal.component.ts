import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from 'src/app/services/SharedServiceService';


@Component({
  selector: 'app-videogal',
  templateUrl: './videogal.component.html',
  styleUrls: ['./videogal.component.css']
})
export class VideogalComponent implements OnInit {
  vidList:any=[];
  id3:any;
  constructor( private route : ActivatedRoute,private service:SharedServiceService) { }

  ngOnInit(): void {
    this.id3=this.route.snapshot.params['id'];
    this.listvid();
  }

  listvid(){
    this.service.getvideo(this.id3).subscribe(data=>{
      this.vidList=data;
    })
    console.log(this.id3);
    
}
}
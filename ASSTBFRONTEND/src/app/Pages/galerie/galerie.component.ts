import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from 'src/app/services/SharedServiceService';
@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
 
 
  ImgList:any=[];
  id3:any;
  constructor( private route : ActivatedRoute,private service:SharedServiceService) { }

  ngOnInit(): void {
    this.id3=this.route.snapshot.params['id'];
    this.listimg();

  }
  listimg(){
    this.service.getgalerieimg(this.id3).subscribe(data=>{
      this.ImgList=data;
    })
    console.log(this.id3);
    
    
  }

}

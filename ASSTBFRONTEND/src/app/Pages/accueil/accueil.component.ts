import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  conv:any=[];
  Mot:any=[];
  vid:any=[];
  NewsList:any=[];
  Listsport:any=[];
  EventList:any=[];
  constructor( private service : SharedServiceService) { }

  ngOnInit(): void {
    this.getm();
    this.getvideo();
    this.refreshNewsList();
    this.lstsport();
    this.GetEventList();
    this.convention();
  }
getm(){
  this.service.Getmot().subscribe(data=>{
this.Mot=data;
  })
}
getvideo(){
  this.service.getVidAccueil().subscribe(data=>{
    this.vid=data;
  });
}
refreshNewsList(){
  this.service.Getactlimit().subscribe(data=>{
    this.NewsList=data;
       });
}
lstsport(){
  this.service.getsport().subscribe(data=>{
    this.Listsport=data;
  })

}
GetEventList(){
  this.service.getevent().subscribe(data=>{
    this.EventList=data;
  })
}
convention(){
  this.service.Getconventions().subscribe(data=>{
    this.conv=data;
});
}
}
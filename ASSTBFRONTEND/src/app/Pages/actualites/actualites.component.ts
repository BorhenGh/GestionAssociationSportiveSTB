import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {


  constructor(private service:SharedServiceService) { }
  NewsList:any=[];


  ngOnInit(): void {
  this.refreshNewsList();}
  refreshNewsList(){
    this.service.getNews().subscribe(data=>{
      this.NewsList=data;
         });
  }
  

}

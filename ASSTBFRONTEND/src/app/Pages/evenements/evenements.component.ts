import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from 'src/app/services/SharedServiceService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})

export class EvenementsComponent implements OnInit {
EventList:any=[];


  constructor(private router :Router, private service:SharedServiceService) { }

  ngOnInit( ): void {
    this.GetEventList();
    
    
    
  }
  GetEventList(){
    this.service.getevent().subscribe(data=>{
      this.EventList=data;
    })
  }
 


}

import { Component, OnInit } from '@angular/core';
import { EvenementsComponent } from '../evenements/evenements.component';
import { SharedServiceService } from 'src/app/services/SharedServiceService';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  id:any;
 
  eventsList:any=[];
  id2:any;

  constructor( private route : ActivatedRoute,private service:SharedServiceService) {



  }

  ngOnInit():void{
    this.id2=this.route.snapshot.params['id'];
    this.listev();
    }



    
    
    listev(){
      this.service.geteventss(this.id2).subscribe(data=>{
        this.eventsList=data;
      })
      console.log(this.id2);
      
      
    }
    
    }

    
    
  

 

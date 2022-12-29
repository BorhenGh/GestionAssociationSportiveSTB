import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from 'src/app/services/SharedServiceService';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  id:any;
 iv:any=0;
  TeamList:any=[];
  CatList:any=[];
  respList:any=[];
  joueursList:any=[];
  id2:any;
  constructor(private route : ActivatedRoute,private service:SharedServiceService) { }

  ngOnInit(): void {
    this.id2=this.route.snapshot.params['id'];
    this.responsable();
    this.joueurs();
  }
  responsable(){
    
   this.service.getresponsable(this.id2).subscribe(data=>{
    this.respList=data;
   })
  
  }
  joueurs(){
    this.service.getjouerusasstb(this.id2).subscribe(data=>{
      this.joueursList=data;
    })
  }

}

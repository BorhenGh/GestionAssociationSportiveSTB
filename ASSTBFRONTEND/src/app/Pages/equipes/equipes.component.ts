import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';
import { ActivatedRoute
 } from '@angular/router';
@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
  id:any;
 iv:any=0;
  SquadList:any=[];
  CatList:any=[];
  id2:any;
nom:any;
  constructor(private route : ActivatedRoute,private service:SharedServiceService) { }

  ngOnInit(): void {
    this.id2=this.route.snapshot.params['id'];
 
    this.listesquad();
    this.listecat();
  }
  listesquad(){
    this.service.getequipes(this.id2).subscribe(data=>{
      this.SquadList=data;
    })
    console.log(this.id2);

}
listecat(){
  this.service.getcat(this.id2).subscribe(data=>{
    this.CatList=data;
  })
}

}
import { Component, Input, OnInit } from '@angular/core';
import { SharedservicesService } from 'src/app/services/sharedservices.service';
@Component({
  selector: 'app-modifier-supprimer-sport',
  templateUrl: './modifier-supprimer-sport.component.html',
  styleUrls: ['./modifier-supprimer-sport.component.css']
})
export class ModifierSupprimerSportComponent implements OnInit {
 
  constructor(private service:SharedservicesService) { }
 @Input() sports:any;
 sportid:any;
 nomsport:any;
 description:any;
 photo:any;
  ngOnInit(): void {
    this.sportid=this.sports.sportid;
    this.nomsport=this.sports.nomsport;
    this.description=this.sports.description;
    this.photo=this.sports.photo;
    this.addsport();
  }
  addsport(){
var val={idsport:this.sportid,nomsport:this.nomsport,description:this.description,photo:this.photo}
this.service.saveSport(val).subscribe(data=>{
  alert(data.toString());
}) 
}
  updatesport(){

  }


}

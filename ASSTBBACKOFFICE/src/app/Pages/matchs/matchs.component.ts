import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
lstmatch:any=[];
editmode:boolean=true;
lssport:any=[];
@ViewChild('usersForm') form!: NgForm;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allmatch();
    this.allsport();

  }
  allmatch(){
    this.service.getmatch().subscribe(data=>{
      this.lstmatch=data;
    })
  }
  allsport(){
    this.service.getsport().subscribe(data=>{
      this.lssport=data;
  })}
  getmatchFormData(data:any){

   
this.service.savematch(data).subscribe((result)=>{
  alert("Ajoute match  avec succès");
  console.warn(result);
  this.allmatch();
})


  }
  supprimer(id:any){
    this.service.supprimermatch(id).subscribe(del=>{
      this.allmatch();
    })
  }
  update(id:any){
    let currentlist =  this.lstmatch.find((p:any)=>{return p.idmatch===id});
    console.log(currentlist);
    this.form.setValue({
    
     domicile:currentlist.domicile,
     exterieur:currentlist.exterieur,
     butd:currentlist.butd,
     butex:currentlist.butex,
     datee:currentlist.datee,
     idsport:currentlist.idsport==this.lssport.nomsport,
    });
    this.editmode=true;


}
}
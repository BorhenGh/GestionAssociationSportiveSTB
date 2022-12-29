import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
  @ViewChild('usersForm') form!: NgForm;
  editmode:boolean=false;
  constructor(private service:SharedservicesService) { }
lsequipes:any=[];
lscat:any=[];
lssport:any=[];
  ngOnInit(): void {
    this.allequipes();
    this.allsport();
    this.allcat();
  }

  allequipes(){
    this.service.getequipess().subscribe(data=>{
      this.lsequipes=data;
    })
  }
  allcat(){
    this.service.Getcategorie().subscribe(data=>{
      this.lscat=data;
    })
  }
  allsport(){
    this.service.getsport().subscribe(data=>{
      this.lssport=data;
  })}
  supprimer(id:any){
    this.service.supprimerequipes(id).subscribe(del=>{
      this.allequipes();
    })
  }
  getequipesFormData(data:any){

   
    this.service.saveequipes(data).subscribe((result)=>{
      alert("Ajout equipes avec succès");
      console.warn(result);
      this.allequipes();
     
    })
    
    

 } 
 update(id:any){
  let currentlist =  this.lsequipes.find((p:any)=>{return p.idequipe===id});
  console.log(currentlist);
  this.form.setValue({
  
   nomequipe:currentlist.nomequipe,
   description:currentlist.description,
   idsport:currentlist.idsport,

   idcategorie:currentlist.idcategorie,
   genre:currentlist.genre,
   region:currentlist.region,
  });
  this.editmode=true;

 } 

}





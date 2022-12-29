import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('usersForm') form!: NgForm;
  lscontact:any=[];
  editmode:boolean=false;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allcontact();
  }
  allcontact(){
    this.service.getContactPge().subscribe(data=>{
      this.lscontact=data;
    })
  }
  getcontactFormData(data:any){

   
    this.service.savecontactpage(data).subscribe((result)=>{
      alert("Ajout Contact page avec succès");
      console.warn(result);
      this.allcontact();
     
    })
    
    

 }
  supprimer(id:any){
    this.service.supprimercontactpage(id).subscribe(del=>{
      this.allcontact();
    })
  }
  update(id:any){
    let currentlist =  this.lscontact.find((p:any)=>{return p.id===id});
    console.log(currentlist);
    this.form.setValue({
    
  adresse:currentlist.adresse,
  mail:currentlist.adresse,
  numero:currentlist.numero,
    
    })
  
   } 



}

import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  lstequipes:any=[];
  lstjoueurs:any=[];
  b:any;
  c:any;
  editmode:boolean=false;
  data:any;
  @ViewChild('usersForm') form!: NgForm;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allequipes();
    this.alljoueurs();
  }
  alljoueurs(){
    this.service.Getjoueurs().subscribe(data=>{
      this.lstjoueurs=data;
  })}
  allequipes(){
    this.service.getequipess().subscribe(data=>{
      this.lstequipes=data;
  })}
  supprimer(id:any){
    this.service.supprimerjoueurs(id).subscribe(del=>{
      this.alljoueurs();
    })
  }
  handleFileInput(event:Event){
    let files= (event.target as HTMLInputElement).files;
    
    if (files){
     for (let index=0;index<files.length;index++ ){
        if (files.item(index)){
          this.postFile(files.item(index)as File);
      

        } 
      }
    }
    
this.b=(event.target as HTMLInputElement).files;
this.c= (event.target as HTMLInputElement).value.replace( "C:\\fakepath\\" , "" );

  }
  postFile(file:File){
    this.service.postFile(file).subscribe(()=>{

    });
  }
  update(id:any){
    let currentlist =  this.lstjoueurs.find((p:any)=>{return p.idj===id});
    console.log(currentlist);
    this.form.setValue({
    
   nomj:currentlist.nomj,
   prenomj:currentlist.prenomj,
   sexe:currentlist.sexe,
   age:currentlist.age,
   datenaiss:currentlist.datenaiss,
   cin:currentlist.cin,
   poste:currentlist.poste,

  idequipe:currentlist.idequipe,
   photo:currentlist.photo,
    });
    this.editmode=true;
  
  
  }
  getJoueursFormData(data:any){

   
    this.service.savejoueurs(data).subscribe((result)=>{
      alert("Ajout Joueur de l'equipe  avec succès");
      console.warn(result);
      this.alljoueurs();
    })
    
  


}





}

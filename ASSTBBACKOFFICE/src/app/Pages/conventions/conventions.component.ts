import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';


@Component({
  selector: 'app-conventions',
  templateUrl: './conventions.component.html',
  styleUrls: ['./conventions.component.css']
})
export class ConventionsComponent implements OnInit {
  @ViewChild('usersForm') form!: NgForm;
  editmode:boolean=false;
  b:any;
  lsconventions:any=[];
  c:any;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allconventions();
  }
  allconventions(){
    this.service.getconventions().subscribe(data=>{
      this.lsconventions=data;
    })
  }
  supprimer(id:any){
    this.service.supprimerconventions(id).subscribe(del=>{
      this.allconventions();
    })
  }
  getconvFormData(data:any){

   
    this.service.saveconventions(data).subscribe((result)=>{
      alert("Ajout Conventions avec succès");
      console.warn(result);
      this.allconventions();
     
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
  this.service.postFichier(file).subscribe(()=>{

  });
}
 
 update(id:any){
  let currentlist =  this.lsconventions.find((p:any)=>{return p.idconv===id});
  console.log(currentlist);
  this.form.setValue({
  
   lien:currentlist.lien,
   namefichier:currentlist.namefichier,
   
  });
  this.editmode=true;

 } 



}

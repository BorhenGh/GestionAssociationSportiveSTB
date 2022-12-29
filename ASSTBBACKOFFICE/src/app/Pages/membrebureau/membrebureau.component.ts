import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-membrebureau',
  templateUrl: './membrebureau.component.html',
  styleUrls: ['./membrebureau.component.css']
})
export class MembrebureauComponent implements OnInit {
  lstb:any=[];
  editmode:boolean=false;
  @ViewChild('usersForm') form!: NgForm;
  data:any;
  b:any;
  c:any;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allbureau();
  }
  allbureau(){
    this.service.getallb().subscribe(data=>{
      this.lstb=data;
    })
  }
  getbureauFormData(data:any){

   
    this.service.savemembreb(data).subscribe((result)=>{
      alert("Ajout mot avec succès");
      console.warn(result);
      this.allbureau();
    })

    
    
      }
      supprimer(id:any){
        this.service.supprimermembreb(id).subscribe(del=>{
          this.allbureau();
        })
      }
    


      update(id:any){
        let currentlist =  this.lstb.find((p:any)=>{return p.idb===id});
        console.log(currentlist);
        this.form.setValue({
        
         nomb:currentlist.nomb,
         prenomb:currentlist.prenomb,
         sexe:currentlist.sexe,

         cinb:currentlist.cinb, 
         poste:currentlist.poste,
         datenaissb:currentlist.datenaissb,
             
         photo:currentlist.photo,
        })
        this.editmode=true;
    
    
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



}

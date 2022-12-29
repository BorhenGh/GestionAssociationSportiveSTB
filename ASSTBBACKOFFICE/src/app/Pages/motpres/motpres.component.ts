import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';


@Component({
  selector: 'app-motpres',
  templateUrl: './motpres.component.html',
  styleUrls: ['./motpres.component.css']
})
export class MotpresComponent implements OnInit {
  lstmot:any=[];
  b:any;
  c:any;
  selectedfile=null;
  editmode:boolean=false;
  @ViewChild('usersForm') form!: NgForm;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.Getallwords();
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
  Getallwords(){
    this.service.Getmot().subscribe(data=>{
      this.lstmot=data;
  })}
  getmotsFormData(data:any){

   
    this.service.savemot(data).subscribe((result)=>{
      alert("Ajout mot avec succès");
      console.warn(result);
      this.Getallwords();
    })

    
    
      }
      update(id:any){
        let currentlist =  this.lstmot.find((p:any)=>{return p.idmot===id});
        console.log(currentlist);
        this.form.setValue({
        
         nompres:currentlist.nompres,
         prenompres:currentlist.prenompres,
         description:currentlist.description,
         photo:currentlist.photo,
        });
        this.editmode=true;
    
    
    }
    supprimer(id:any){
      this.service.supprimermot(id).subscribe(del=>{
        this.Getallwords();
      })
    }
    onfileselected(event:any){
      this.selectedfile=event.target.files[0];     
    
    
    }

}

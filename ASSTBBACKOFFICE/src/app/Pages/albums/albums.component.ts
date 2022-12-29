import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @ViewChild('usersForm') form!: NgForm;
  lstalbum:any=[];
  editmode:boolean=false;


 b:any;
 c:any;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.Getallalbums();
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
  Getallalbums(){
    this.service.getalbum().subscribe(data=>{
      this.lstalbum=data;
  })}
  getalbumsFormData(data:any){

   
    this.service.savealbum(data).subscribe((result)=>{
      alert("Ajout album avec succès");
      console.warn(result);
      this.Getallalbums();
    })
    
    
      }
      supprimer(id:any){
        this.service.supprimeralbum(id).subscribe(del=>{
          this.Getallalbums();
        })
      }
    
      update(id:any){
        let currentlist =  this.lstalbum.find((p:any)=>{return p.idalbum===id});
        console.log(currentlist);
        this.form.setValue({
        
         nomalbum:currentlist.nomalbum,
         photo:currentlist.photo,
         
        });
        this.editmode=true;
    
    
    }



}

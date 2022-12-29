import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-catevents',
  templateUrl: './catevents.component.html',
  styleUrls: ['./catevents.component.css']
})
export class CateventsComponent implements OnInit {
  @ViewChild('usersForm') form!: NgForm;
  constructor(private service:SharedservicesService) { }
  lsevent:any=[];
  b:any;
  c:any;
  editmode:boolean=false;
  ngOnInit(): void {
    this.allevent();
  }
  allevent(){
    this.service.getallevent().subscribe(data=>{
      this.lsevent=data;
    })
  }
  supprimer(id:any){
    this.service.supprimerevent(id).subscribe(del=>{
      this.allevent();
    })
  }
  geteventFormData(data:any){

   
    this.service.saveevent(data).subscribe((result)=>{
      alert("Ajout Event avec succès");
      console.warn(result);
      this.allevent();
     
    })
    
    

 }
 update(id:any){
  let currentlist =  this.lsevent.find((p:any)=>{return p.idevent===id});
  console.log(currentlist);
  this.form.setValue({
  
 titreevent:currentlist. titreevent,
   description:currentlist.description,
   datee:currentlist.datee,
   photo:currentlist.photo
  });
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

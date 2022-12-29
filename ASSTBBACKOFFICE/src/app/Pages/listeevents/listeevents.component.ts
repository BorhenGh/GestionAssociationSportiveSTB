import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-listeevents',
  templateUrl: './listeevents.component.html',
  styleUrls: ['./listeevents.component.css']
})
export class ListeeventsComponent implements OnInit {
  @ViewChild('usersForm') form!: NgForm;
  lsevents:any=[];
  lsevent:any=[];
  b:any;
  c:any;
  editmode:boolean=false;
  data:any;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allevent();
    this.allevents();
  }
  allevent(){
    this.service.getallevent().subscribe(data=>{
      this.lsevent=data;
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

  allevents(){
    this.service.getallevents().subscribe(data=>{
      this.lsevents=data;
    })
  }
  supprimer(id:any){
    this.service.supprimerevents(id).subscribe(del=>{
      this.allevents();
    })
  }
  geteventFormData(data:any){

   
    this.service.saveevents(data).subscribe((result)=>{
      alert("Ajout Events avec succès");
      console.warn(result);
      this.allevents();
     
    })
    
    

 }
 onFileChanged(event:any){

  const reader = new FileReader();
  
  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.data.parentForm.patchValue({
        tso: reader.result
      });
  
      // need to run CD since file load runs outside of zone
    
    };
  }
  





}
update(id:any){
  let currentlist =  this.lsevents.find((p:any)=>{return p.idevents===id});
  console.log(currentlist);
  this.form.setValue({
  
 nomevent:currentlist.nomevent,
   description:currentlist.description,
   datee:currentlist.datee,
   idevent:currentlist.idevent,
   photo:currentlist.photo
  });
  this.editmode=true;

 } 
}

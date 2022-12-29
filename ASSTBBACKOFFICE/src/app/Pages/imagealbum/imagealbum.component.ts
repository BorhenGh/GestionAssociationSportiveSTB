import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-imagealbum',
  templateUrl: './imagealbum.component.html',
  styleUrls: ['./imagealbum.component.css']
})
export class ImagealbumComponent implements OnInit {
  lstalbums:any=[];
  lsimages:any=[];
  data:any;
  b:any;
  c:any;
  editmode:boolean=false;
  @ViewChild('usersForm') form!: NgForm;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.Getallalbums();
    this.allimages();
  }
  Getallalbums(){
    this.service.getalbum().subscribe(data=>{
      this.lstalbums=data;
  })}
  allimages(){
    this.service.getimgalbum().subscribe(data=>{
      this.lsimages=data;
  })}
  supprimer(id:any){
    this.service.supprimeralbumimg(id).subscribe(del=>{
      this.allimages();
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
  
  getimagesFormData(data:any){

   
    this.service.savealbumimg(data).subscribe((result)=>{
      alert("Ajout Image de l'album  avec succès");
      console.warn(result);
      this.allimages();
    })
    
  


}
update(id:any){
  let currentlist =  this.lsimages.find((p:any)=>{return p.idimage===id});
  console.log(currentlist);
  this.form.setValue({
  
  description:currentlist.description,
   photo:currentlist.photo,
   idalbum:currentlist.idalbum==this.lstalbums.nomalbum,
 
  });
  this.editmode=true;


}
onFileChange(event:any){

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
}}
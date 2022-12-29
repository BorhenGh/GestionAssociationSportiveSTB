import { ChangeDetectorRef, Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-videoalbum',
  templateUrl: './videoalbum.component.html',
  styleUrls: ['./videoalbum.component.css']
})
export class VideoalbumComponent implements OnInit {
  lstalbums:any=[];
  lsvideos:any=[];
  b:any;
  c:any;
  data:any=[];
  editmode:boolean=false;
  @ViewChild('usersForm') form!: NgForm;
  constructor(private service:SharedservicesService,  private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.Getallalbums();
    this.allvideos();
  }

  supprimer(id2:any){
    this.service.supprimervideoalbum(id2).subscribe(del=>{
      this.allvideos();
    })
  }
  Getallalbums(){
    this.service.getalbum().subscribe(data=>{
      this.lstalbums=data;
  })}
  allvideos(){
    this.service.getvideoalbum().subscribe(data=>{
      this.lsvideos=data;
  })}
 
  update(id:any){
    let currentlist =  this.lsvideos.find((p:any)=>{return p.id===id});
    console.log(currentlist);
    this.form.setValue({
    
   
     idalbum:currentlist.idalbum==this.lstalbums.nomalbum,
     nom:currentlist.nom,
     video:currentlist.video

   
    });
    this.editmode==true
  
  
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
    this.service.postVideo(file).subscribe(()=>{
  
    });
  }
  getVideosFormData(data:any){

   
    this.service.savevideos(data).subscribe((result)=>{
      alert("Ajout Videos de l'album  avec succès");
      console.warn(result);
      this.allvideos();
    })
    



}

onFileChange(event:any) {
 const reader = new FileReader();
 if (event.target.files&&event.target.files.length){
  const[file]=event.target.files;
  reader.readAsDataURL(file);
  reader.onload=()=>{
    this.data.parentForm.patchValue({
      tso:reader.result
    });
    this.cd.markForCheck();
  };
 }
  
}
}

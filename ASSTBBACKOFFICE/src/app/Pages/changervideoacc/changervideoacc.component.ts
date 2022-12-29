import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';


@Component({
  selector: 'app-changervideoacc',
  templateUrl: './changervideoacc.component.html',
  styleUrls: ['./changervideoacc.component.css']
})
export class ChangervideoaccComponent implements OnInit {
  @ViewChild('usersForm') form!: NgForm;
  lsviac:any=[];
  editmode:boolean=false;
  b:any;
  c:any;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allvid();
  }
  allvid(){
    this.service.getVidAccueil().subscribe(data=>{
      this.lsviac=data;
    })
  }
  supprimer(id:any){
    this.service.supprimervideoacc(id).subscribe(del=>{
      this.allvid();
    })
  }
  
  
  getvidaccFormData(data:any){

   
    this.service.savevideoacc(data).subscribe((result)=>{
      alert("Ajout Video accueil avec succès");
      console.warn(result);
      this.allvid();
     
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
  this.service.postVideo(file).subscribe(()=>{

  });
}
 update(id:any){
  let currentlist =  this.lsviac.find((p:any)=>{return p.id===id});
  console.log(currentlist);
  this.form.setValue({
  
video:currentlist. video,
  
  })

 } 




}

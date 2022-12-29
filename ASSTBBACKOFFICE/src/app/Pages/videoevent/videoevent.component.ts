import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-videoevent',
  templateUrl: './videoevent.component.html',
  styleUrls: ['./videoevent.component.css']
})
export class VideoeventComponent implements OnInit {
  lstevents:any=[];
  lsvideos:any=[];
  data:any;
  b:any;
  c:any;
  editmode:boolean=false;
  @ViewChild('usersForm') form!: NgForm;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.Getallevents();
    this.allvideos();
  }
  Getallevents(){
    this.service.getallevents().subscribe(data=>{
      this.lstevents=data;
  })}
  allvideos(){
    this.service.getallvideoevents().subscribe(data=>{
      this.lsvideos=data;
  })}
  supprimer(id:any){
    this.service.supprimervideoevent(id).subscribe(del=>{
      this.allvideos();
    })
  }
  getvideosFormData(data:any){

   
    this.service.savevideoevent(data).subscribe((result)=>{
      alert("Ajout videos de l'event  avec succès");
      console.warn(result);
      this.allvideos();
    })
    
  


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
  let currentlist =  this.lsvideos.find((p:any)=>{return p.id===id});
  console.log(currentlist);
  this.form.setValue({
    nom:currentlist.nom,  
 video:currentlist.video,

  
   idevents:currentlist.idevents==this.lstevents.nomevent,

  });
  this.editmode=true;


}


}

import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';


@Component({
  selector: 'app-imageevent',
  templateUrl: './imageevent.component.html',
  styleUrls: ['./imageevent.component.css']
})
export class ImageeventComponent implements OnInit {
  lstevents:any=[];
  lsimages:any=[];
  data:any;
  b:any;
  c:any;
  editmode:boolean=false;
  @ViewChild('usersForm') form!: NgForm;
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allimages();
    this.Getallevents();
  }
  Getallevents(){
    this.service.getallevents().subscribe(data=>{
      this.lstevents=data;
  })}
  allimages(){
    this.service.getallImageevents().subscribe(data=>{
      this.lsimages=data;
  })}
  supprimer(id:any){
    this.service.supprimerimageevent(id).subscribe(del=>{
      this.allimages();
    })
  }
  getimagesFormData(data:any){

   
    this.service.saveImgevent(data).subscribe((result)=>{
      alert("Ajout Image de l'event  avec succès");
      console.warn(result);
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
update(id:any){
  let currentlist =  this.lsimages.find((p:any)=>{return p.idimaeev===id});
  console.log(currentlist);
  this.form.setValue({
  
 
   photo:currentlist.photo,
   idevents:currentlist.idevents==this.lstevents.nomevent,
 
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
  }

}

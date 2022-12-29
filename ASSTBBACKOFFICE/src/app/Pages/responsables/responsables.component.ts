import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {
  @ViewChild('usersForm') form!: NgForm;
  lstrespo:any=[];
lssequipes:any=[];
b:any;
c:any;
editmode:boolean=false;

  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allresponsables();
    this.allequipes();
  }
  allresponsables(){
    this.service.getresp().subscribe(data=>{
      this.lstrespo=data;
    })
  }
  allequipes(){
    this.service.getequipess().subscribe(data=>{
      this.lssequipes=data;
    })
  }
  getsportFormData(data:any){

   
    this.service.saveresponsable(data).subscribe((result)=>{
      alert("Ajout responsable  avec succès");
      console.warn(result);
      this.allresponsables();
    })


}
supprimer(id:any){
  this.service.supprimerresponsable(id).subscribe(del=>{
    this.allresponsables();
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
  let currentlist =  this.lstrespo.find((p:any)=>{return p.idresponsable===id});
  console.log(currentlist);
  this.form.setValue({
  
   nomresponsable:currentlist.nomresponsable,
   prenomresponsable:currentlist.prenomresponsable,
   cin:currentlist.cin,
   fonction:currentlist.fonction,
   idequipe:currentlist.idequipe,
   photo:currentlist.photo==this.c,
   
  });
  this.editmode=true;


}

}

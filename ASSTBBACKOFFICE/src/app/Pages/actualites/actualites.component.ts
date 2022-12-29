import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';


@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
  Listact:any=[];
  b:any;
  c:any;
  d:any;
 
  str1:any;
  @ViewChild('usersForm') form!: NgForm;
  editmode:boolean=false;
 shortlink :string="";
 loading:boolean=false;
 file!:File;
  constructor(private service :SharedservicesService) { }

  ngOnInit(): void {
    this.allnews();
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
  handleFileInputfichier(event:Event){
    let files= (event.target as HTMLInputElement).files;
    
    if (files){
     for (let index=0;index<files.length;index++ ){
        if (files.item(index)){
          this.postFichier(files.item(index)as File);
      

        } 
      }
    }
    
this.b=(event.target as HTMLInputElement).files;
this.d= (event.target as HTMLInputElement).value.replace( "C:\\fakepath\\" , "" );
var str1 = new String( "This is string one" ); 
  }
  postFichier(file:File){
    this.service.postFichier(file).subscribe(()=>{

    });
  }
  getactualiteFormData(data:any){
    console.warn(data)
    this.service.saveact(data).subscribe((result)=>{
      alert("Ajoute actualites avec succès");
      this.allnews();
    })
     }
     allnews(){
      this.service.getNews().subscribe(data=>{
        this.Listact=data;
      })
    }
    supprimer(id:any){
  
    
     
      this.service.supprimeract(id).subscribe(del=>{
        this.allnews();
      })}
      update(id:any){
        let currentlist =  this.Listact.find((p:any)=>{return p.idact===id});
        console.log(currentlist);
        this.form.setValue({
        
          titreact:currentlist.titreact,
         contenu:currentlist.contenu,
         datee:currentlist.datee,
         lien:currentlist.lien,
         image:currentlist.image,
         namefichier:currentlist.datee,
        });
        this.editmode==true;
          
           
       
 
          }
  

}

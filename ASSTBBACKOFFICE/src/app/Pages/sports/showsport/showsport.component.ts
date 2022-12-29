import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-showsport',
  templateUrl: './showsport.component.html',
  styleUrls: ['./showsport.component.css']
})
export class ShowsportComponent implements OnInit {
  Listsport:any=[];
  @ViewChild('usersForm') form!: NgForm;
  editmode:boolean=false;
 shortlink :string="";
 loading:boolean=false;
 file!:File;
 b:any;
 d:any;
 c:any;
  constructor(private service :SharedservicesService) { }
  ModalTitle:any;
  ActivateAddEditSportComp:boolean=false;
 sports:any;
 lst:any=[];
  ngOnInit(): void {
    this.lstsport();
    this.addclick();
    this.closeclick();
   

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

  getsportFormData(data:any){
    console.warn(data)
    this.service.saveSport(data).subscribe((result)=>{
      alert("Ajoute sport avec succès");
      this.lstsport();
    })
     }
  
     lstsport(){
      this.service.getsport().subscribe(data=>{
        this.Listsport=data;
      })
    } 
    addclick(){
      this.sports={
        idsport:0,
        nomsport:"",
        description:"",
        photo:""
      }
     this.ModalTitle="Ajouter Sport!!";
     this.ActivateAddEditSportComp=true;
    }
    closeclick(){
      this.ActivateAddEditSportComp=false;
       

    }
    editclick(item:any){
      this.sports=item;
      this.ModalTitle="Edit sport";
      this.ActivateAddEditSportComp=true;



    }
    getsport(){
      this.service.getsport().subscribe(data=>{
        this.Listsport=data;
      })
    }
    supprimer(id:any){
  
    
     
        this.service.supprimersport(id).subscribe(del=>{
          this.lstsport();
        })}
        update(id:any){
       let currentlist =  this.Listsport.find((p:any)=>{return p.idsport===id});
       console.log(currentlist);
       this.form.setValue({
       
        nomsport:currentlist.nomsport,
        description:currentlist.description,
        photo:currentlist.photo
       });
    this.editmode=true;
         
          
      

         }

        }
        
        
      
  





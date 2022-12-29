import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private service:SharedServiceService) {
    


  }
  ContactList:any=[];
 

 ngOnInit(): void {
  
 this.refreshConList();

 
 }

 refreshConList(){
   this.service.getContactPge().subscribe(data=>{
this.ContactList=data;
   });
 }
 getUserFormData(data:any){
  console.warn(data)
  this.service.saveUser(data).subscribe((result)=>{
    console.warn(result)
  })
   }
 
}

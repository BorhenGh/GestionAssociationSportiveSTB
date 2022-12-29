import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{FormGroup,FormBuilder} from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private service:SharedservicesService,private formbuilder:FormBuilder,private router:Router) { }
  public SignForm!:FormGroup;
  ngOnInit(): void {
    this.SignForm=this.formbuilder.group({
    
      email:[''],
      password:['']

    })

  }
  SignIn(){
    this.service.getuser().subscribe(res=>{
    const userasstb= res.find((a:any)=>{
      return a.email===this.SignForm.value.email&& a.password===this.SignForm.value.password
    });
    if (userasstb){
      alert ('Login Successful');
      this.SignForm.reset();
      this.router.navigate(['accueil']);
    } else{
      alert("User Not found!!!")
    }
    

      
      
    },err=>{
      alert('Something want wrong');
    })
  }
 
  

}

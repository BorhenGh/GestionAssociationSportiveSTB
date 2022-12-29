import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{FormGroup,FormBuilder} from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private service:SharedservicesService,private formbuilder:FormBuilder,private router:Router) { }
public SignForm!:FormGroup;
  ngOnInit(): void {
    this.SignForm=this.formbuilder.group({
      pseudo:[''],
      email:[''],
      password:['']

    })
  }
  SignUp(){
    this.service.saveuser(this.SignForm.value).subscribe(res=>{
      alert('Signup successful');
      this.SignForm.reset();
      this.router.navigate(['']);

      
      
    },err=>{
      alert('Something want wrong');
    })
  }
 }

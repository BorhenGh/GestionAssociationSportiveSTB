import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';


@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit {

  constructor(private service:SharedServiceService) {


   }
   BureauList:any=[];
   presList:any=[];
   seclist:any=[];
   vislist:any=[];
   memList:any=[];
   tresList:any=[];
   secad:any=[];
   trad:any=[];

  ngOnInit(): void {
  this.refreshDepList();
  this.presidentList();
  this.secretaireList();
  this.viceList();
  this.mList();
  this.tresorier();
  this.secadjoint();
  this.tread();
  }
  tread(){
    this.service.Gettradj().subscribe(data=>{
      this.trad=data;

    })
  }
  secadjoint(){
    this.service.Getsecadjoint().subscribe(data=>{
      this.secad=data;})
  }
  tresorier(){
    this.service.GetTrésorier().subscribe(data=>{
      this.tresList=data;
    })
  }
  refreshDepList(){
    this.service.getAbout().subscribe(data=>{
this.BureauList=data;
    });
  }
  presidentList(){
    this.service.getpresident().subscribe(data=>{
this.presList=data;
    })
  }
  secretaireList(){
    this.service.getSecrétairegénéral().subscribe(data=>{
      this.seclist=data;
    })
  }
  viceList(){
    this.service.GetViceprésident().subscribe(data=>{
      this.vislist=data;
    })
  }
  mList(){
    this.service.Getmembre().subscribe(data=>{
      this.memList=data;
    })
  }

}


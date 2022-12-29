import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedservicesService } from 'src/app/services/sharedservices.service';

@Component({
  selector: 'app-messagerecus',
  templateUrl: './messagerecus.component.html',
  styleUrls: ['./messagerecus.component.css']
})
export class MessagerecusComponent implements OnInit {
  lstmessages:any=[];
  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
    this.allmessages();
  }

  allmessages(){
    this.service.getmessagesrec().subscribe(data=>{
      this.lstmessages=data;
  })}
  supprimer(id:any){
    this.service.supprimermessage(id).subscribe(del=>{
      this.allmessages();
    })
  }
}

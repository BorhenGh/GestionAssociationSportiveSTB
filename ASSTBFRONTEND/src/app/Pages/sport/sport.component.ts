import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  Listsport:any=[];
  constructor(private service:SharedServiceService) { }

  ngOnInit(): void {
    this.lstsport();
  }
lstsport(){
  this.service.getsport().subscribe(data=>{
    this.Listsport=data;
  })
}
}

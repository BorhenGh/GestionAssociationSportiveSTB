import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
sportlis:any=[];
  constructor(private service:SharedServiceService) { }

  ngOnInit(): void {
    this.sport();
  }
  sport(){
    this.service.getsport().subscribe(data=>{
      this.sportlis=data;
    })
  }

}

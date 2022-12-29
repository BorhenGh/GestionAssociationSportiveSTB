import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/SharedServiceService';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resultatcat',
  templateUrl: './resultatcat.component.html',
  styleUrls: ['./resultatcat.component.css']
})
export class ResultatcatComponent implements OnInit {
  id:any;
 
  scoreList:any=[];
  id2:any;

  constructor(private route : ActivatedRoute,private service:SharedServiceService) {

    this.id2=this.route.snapshot.params['id'];
 this.score();
   }

  ngOnInit(): void {
  }
  score(){
    this.service.getscore(this.id2).subscribe(data=>{
      this.scoreList=data;
    })
  }

}

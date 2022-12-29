import { Component, OnInit } from '@angular/core';
import { SharedservicesService } from 'src/app/services/sharedservices.service';


@Component({
  selector: 'app-ajoutersport',
  templateUrl: './ajoutersport.component.html',
  styleUrls: ['./ajoutersport.component.css']
})
export class AjoutersportComponent implements OnInit {

  constructor(private service:SharedservicesService) { }

  ngOnInit(): void {
  }
  getsportFormData(data:any){
    console.warn(data)
    this.service.saveSport(data).subscribe((result)=>{
      alert("Ajoute sport avec succès");
    })
     }

}

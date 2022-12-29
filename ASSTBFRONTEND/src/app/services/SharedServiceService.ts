import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  readonly ApiUrl = "http://localhost:49568/api";
  readonly PhotoUrl = "http://localhost:53535/Photos";
  constructor(private http: HttpClient) {
  }
  saveSport(data: any) {
    return this.http.post(this.ApiUrl + '/sport', data);
  }
  getVidAccueil(): Observable<any[]> {     
    return this.http.get<any>(this.ApiUrl + "/videoaccueil");
  }
  getAbout(): Observable<any[]> {     
    return this.http.get<any>(this.ApiUrl + "/bureau");
  }
  getContactPge(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/contactpage");
  }
  getNews(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/actualites");
  }
  saveUser(data: any) {
    return this.http.post(this.ApiUrl + '/contact', data);
  }
  getevent(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/evenement");
  }
  geteventss(id:any){
    return this.http.get(this.ApiUrl+'/eventss/'+id);
}

getgalerieimg(id:any){
  return this.http.get(this.ApiUrl+'/galerieimg/'+id);
}
getvideo(id:any){
  return this.http.get(this.ApiUrl+'/videoev/'+id);
}
getalbum(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/album");
}
getsport(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/sport");
}
getpresident(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/bureau/Getpresident");
}
getSecrétairegénéral(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/bureau/GetSecrétairegénéral");
}
GetViceprésident(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/bureau/GetViceprésident");
}
Getmembre(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/bureau/Getmembre");
}
GetTrésorier(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/bureau/GetTrésorerier");
}
Getsecadjoint(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/bureau/GetSecrétairegénéraladjoint");
}
Getactlimit(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/actualites/GetLimitAct");
}
Getconventions(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/Conventions");
}
Gettradj():Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/bureau/GetTrésorerieradjoint");
}
Getmot():Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/mot");
}
getequipes(id:any){
  return this.http.get(this.ApiUrl+'/equipes/'+id);
}
getcat(id:any){
  return this.http.get(this.ApiUrl+'/categorie/'+id);
}
getresponsable(id:any){
  return this.http.get(this.ApiUrl+'/responsable/'+id);
}
getjouerusasstb(id:any){
  return this.http.get(this.ApiUrl+'/joueursasstb/'+id);

}
getscore(id:any){
  return this.http.get(this.ApiUrl+'/score/'+id);

}
getalbumimg(id:any){
  return this.http.get(this.ApiUrl+'/albumimg/'+id);

}
getalbumvid(id:any){
  return this.http.get(this.ApiUrl+'/videoalbum/'+id);

}
}

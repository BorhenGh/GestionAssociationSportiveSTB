import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedservicesService {
  readonly ApiUrl = "http://localhost:49568/api";
  readonly PhotoUrl = "http://localhost:53535/Photos";
  baseurl="http://localhost:49568/api/upload";
  baseurl2="http://localhost:49568/api/uploadvideo";
  baseurl3="http://localhost:49568/api/uploadfile"
  constructor(private http: HttpClient) { }
 
 postFile(fileupload:File):Observable<Object>{
  //creat formdara
  const formdata = new FormData(); 
  //store from name as "file" with file data  
  formdata.append('file',fileupload);
  const headers=new HttpHeaders().append('Content-Disposition','multipart/form-data');
  return this.http.post(this.baseurl+'/upload',formdata,{headers});

 }
 
 postFichier(fileupload:File):Observable<Object>{
  //creat formdara
  const formdata = new FormData(); 
  //store from name as "file" with file data  
  formdata.append('file',fileupload);
  const headers=new HttpHeaders().append('Content-Disposition','multipart/form-data');
  return this.http.post(this.baseurl3+'/uploadfile',formdata,{headers});

 }
 postVideo(fileupload:File):Observable<Object>{
  //creat formdara
  const formdata = new FormData(); 
  //store from name as "file" with file data  
  formdata.append('file',fileupload);
  const headers=new HttpHeaders().append('Content-Disposition','multipart/form-data');
  return this.http.post(this.baseurl2+'/uploadvideo',formdata,{headers});

 }
  getsportbyid(id:any){
    return this.http.get(this.ApiUrl+'/sport/'+id);
  }
  saveresponsable(data: any) {
    return this.http.post(this.ApiUrl + '/responsable', data); //Post Responsable
 
  }
  savealbum(data: any) {
    return this.http.post(this.ApiUrl + '/album', data);
  }
  saveact(data: any) {
    return this.http.post(this.ApiUrl + '/actualites', data);
  }
  savemot(data: any) {
    return this.http.post(this.ApiUrl + '/mot', data);
  }
  savejoueurs(data: any) {
    return this.http.post(this.ApiUrl + '/joueursasstb', data);
  }
  saveSport(data: any) {
    return this.http.post(this.ApiUrl + '/sport', data);
  }
  savematch(data: any) {
    return this.http.post(this.ApiUrl + '/score', data);
  }
  savevideos(data: any) {
    return this.http.post(this.ApiUrl + '/videoalbum', data);
  }
  savemembreb(data: any) {
    return this.http.post(this.ApiUrl + '/bureau', data);
  }
  saveconventions(data: any) {
    return this.http.post(this.ApiUrl + '/conventions', data);
  }
  saveevent(data: any) {
    return this.http.post(this.ApiUrl + '/Evenement', data);
  }
  saveevents(data: any) {
    return this.http.post(this.ApiUrl + '/eventss', data);
  }
  saveImgevent(data: any) {
    return this.http.post(this.ApiUrl + '/galerieimg', data);
  }
  savevideoevent(data: any) {
    return this.http.post(this.ApiUrl + '/videoev', data);
  }
  savevideoacc(data: any) {
    return this.http.post(this.ApiUrl + '/videoaccueil', data);
  }
 
  savecontactpage(data: any) {
    return this.http.post(this.ApiUrl + '/contactpage', data);
  }
 
  saveequipes(data: any) {
    return this.http.post(this.ApiUrl + '/equipes', data);
  }
  saveuser(data: any) {
    return this.http.post(this.ApiUrl + '/user', data);
  }
  supprimerresponsable(data:any){
    return this.http.delete(this.ApiUrl+'/responsable/'+data);
  }
  supprimercontactpage(data:any){
    return this.http.delete(this.ApiUrl+'/contactpage/'+data);
  }
  supprimeract(data:any){
    return this.http.delete(this.ApiUrl+'/actualites/'+data);
  }
  supprimermembreb(data:any){
    return this.http.delete(this.ApiUrl+'/bureau/'+data);
  }
  supprimermessage(data:any){
    return this.http.delete(this.ApiUrl+'/contact/'+data);
  }
  supprimermot(data:any){
    return this.http.delete(this.ApiUrl+'/mot/'+data);
  }
  supprimervideoalbum(data:any){
    return this.http.delete(this.ApiUrl+'/videoalbum/'+data);
  }
  supprimeralbum(data:any){
    return this.http.delete(this.ApiUrl+'/album/'+data);
  }
  supprimersport(data:any){
    return this.http.delete(this.ApiUrl+'/sport/'+data);
  }
  supprimerevent(data:any){
    return this.http.delete(this.ApiUrl+'/Evenement/'+data);
  }
  supprimerevents(data:any){
    return this.http.delete(this.ApiUrl+'/eventss/'+data);
  }
  supprimerimageevent(data:any){
    return this.http.delete(this.ApiUrl+'/galerieimg/'+data);
  }
  supprimervideoevent(data:any){
    return this.http.delete(this.ApiUrl+'/videoev/'+data);
  }
  supprimerequipes(data:any){
    return this.http.delete(this.ApiUrl+'/equipes/'+data);
  }
   supprimeralbumimg(data:any){
    return this.http.delete(this.ApiUrl+'/albumimg/'+data);
  }
  supprimerjoueurs(data:any){
    return this.http.delete(this.ApiUrl+'/joueursasstb/'+data);
  }
  supprimerconventions(data:any){
    return this.http.delete(this.ApiUrl+'/conventions/'+data);
  }
  supprimervideoacc(data:any){
    return this.http.delete(this.ApiUrl+'/videoaccueil/'+data);
  }
  supprimermatch(data:any){
    return this.http.delete(this.ApiUrl+'/score/'+data);
  }
  getVidAccueil(): Observable<any[]> {     
    return this.http.get<any>(this.ApiUrl + "/videoaccueil");
  }
  getuser(): Observable<any[]> {     
    return this.http.get<any>(this.ApiUrl + "/user");
  }
  getAbout(): Observable<any[]> {     
    return this.http.get<any>(this.ApiUrl + "/bureau");
  }
  getvideoalbum(): Observable<any[]> {     
    return this.http.get<any>(this.ApiUrl + "/videoalbum");
  }
  getconventions(): Observable<any[]> {     
    return this.http.get<any>(this.ApiUrl + "/conventions");
  }
  getContactPge(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/contactpage");
  }
  getNews(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/actualites");
  }
  getmatch(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/score");
  }
  saveUser(data: any) {
    return this.http.post(this.ApiUrl + '/contact', data);
  }
  savealbumimg(data: any) {
    return this.http.post(this.ApiUrl + '/albumimg', data);
  }
  getevent(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/evenement");
  }
  getresp(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/responsable");
  }
  getimgalbum(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/albumimg");
  }
  getallevent(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Evenement");
  }
  getallevents(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/eventss");
  }
  getallImageevents(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/galerieimg");
  }
  getallvideoevents(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/videoev");
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
Getjoueurs(): Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/joueursasstb");
}
Gettradj():Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/bureau/GetTrésorerieradjoint");
}
Getmot():Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/mot");
}
Getcategorie():Observable<any[]> {
  return this.http.get<any>(this.ApiUrl + "/categorie");
}
getequipes(id:any){
  return this.http.get(this.ApiUrl+'/equipes/'+id);
}
getequipess():Observable<any[]> {
  return this.http.get<any>(this.ApiUrl+'/equipes');
}
getmessagesrec():Observable<any[]> {
  return this.http.get<any>(this.ApiUrl+'/contact');
}
getallb():Observable<any[]> {
  return this.http.get<any>(this.ApiUrl+'/bureau');
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

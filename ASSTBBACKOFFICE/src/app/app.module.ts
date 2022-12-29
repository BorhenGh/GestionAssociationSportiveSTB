import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './SharedPage/navbar/navbar.component';
import { SportsComponent } from './Pages/sports/sports.component';
import { EquipesComponent } from './Pages/equipes/equipes.component';
import { JoueursComponent } from './Pages/joueurs/joueurs.component';
import { ResponsablesComponent } from './Pages/responsables/responsables.component';
import { MatchsComponent } from './Pages/matchs/matchs.component';
import { ActualitesComponent } from './Pages/actualites/actualites.component';
import { CateventsComponent } from './Pages/catevents/catevents.component';
import { ListeeventsComponent } from './Pages/listeevents/listeevents.component';
import { OrganigrammebComponent } from './Pages/organigrammeb/organigrammeb.component';
import { MembrebureauComponent } from './Pages/membrebureau/membrebureau.component';
import { MotpresComponent } from './Pages/motpres/motpres.component';
import { AlbumsComponent } from './Pages/albums/albums.component';
import { ChangervideoaccComponent } from './Pages/changervideoacc/changervideoacc.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { MessagerecusComponent } from './Pages/messagerecus/messagerecus.component';
import { SharedservicesService } from './services/sharedservices.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddEditSportComponent } from './Pages/add-edit-sport/add-edit-sport.component';
import { ModifierSupprimerSportComponent } from './Pages/sports/modifier-supprimer-sport/modifier-supprimer-sport.component';
import { ShowsportComponent } from './Pages/sports/showsport/showsport.component';
import { AjoutersportComponent } from './Pages/ajoutersport/ajoutersport.component';
import { ImagealbumComponent } from './Pages/imagealbum/imagealbum.component';
import { VideoalbumComponent } from './Pages/videoalbum/videoalbum.component';
import { ImageeventComponent } from './Pages/imageevent/imageevent.component';
import { VideoeventComponent } from './Pages/videoevent/videoevent.component';
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import { ConventionsComponent } from './Pages/conventions/conventions.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SportsComponent,
    EquipesComponent,
    JoueursComponent,
    ResponsablesComponent,
    MatchsComponent,
    ActualitesComponent,
    CateventsComponent,
    ListeeventsComponent,
    OrganigrammebComponent,
    MembrebureauComponent,
    MotpresComponent,
    AlbumsComponent,
    ChangervideoaccComponent,
    ContactComponent,
    MessagerecusComponent,
    AddEditSportComponent,
    ModifierSupprimerSportComponent,
    ShowsportComponent,
    AjoutersportComponent,
    ImagealbumComponent,
    VideoalbumComponent,
    ImageeventComponent,
    VideoeventComponent,
    ConnexionComponent,
    AccueilComponent,
    InscriptionComponent,
    ConventionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,
  ],
  providers: [SharedservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

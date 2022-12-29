import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './Pages/events/events.component';
import { NavBarComponent } from './sharepage/nav-bar/nav-bar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { SportComponent } from './Pages/sport/sport.component';
import { ActualitesComponent } from './Pages/actualites/actualites.component';
import { EvenementsComponent } from './Pages/evenements/evenements.component';
import { ResultatsComponent } from './Pages/resultats/resultats.component';
import { GalerieComponent } from './Pages/galerie/galerie.component';
import { AProposComponent } from './Pages/a-propos/a-propos.component';
import { ContactComponent } from './Pages/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { VideogalComponent } from './Pages/videogal/videogal.component';
import { AlbumComponent } from './Pages/album/album.component';
import { EquipesComponent } from './Pages/equipes/equipes.component';
import { TeamComponent } from './Pages/team/team.component';
import { ResultatcatComponent } from './Pages/resultatcat/resultatcat.component';
import { AlbumimgComponent } from './Pages/albumimg/albumimg.component';
import { AlbumvidComponent } from './Pages/albumvid/albumvid.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AccueilComponent,
    SportComponent,AlbumimgComponent, AlbumvidComponent,
    ActualitesComponent,
    EvenementsComponent,
    ResultatsComponent,
    GalerieComponent,
    AProposComponent,
    ContactComponent,
    EventsComponent,
    VideogalComponent,
    AlbumComponent,
    EquipesComponent,
    TeamComponent,
    ResultatcatComponent,
   
   
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,HttpClientModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

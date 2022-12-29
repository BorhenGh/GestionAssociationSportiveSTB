import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualitesComponent } from './Pages/actualites/actualites.component';
import { AlbumsComponent } from './Pages/albums/albums.component';
import { CateventsComponent } from './Pages/catevents/catevents.component';
import { ChangervideoaccComponent } from './Pages/changervideoacc/changervideoacc.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { EquipesComponent } from './Pages/equipes/equipes.component';
import { JoueursComponent } from './Pages/joueurs/joueurs.component';
import { ListeeventsComponent } from './Pages/listeevents/listeevents.component';
import { MatchsComponent } from './Pages/matchs/matchs.component';
import { MembrebureauComponent } from './Pages/membrebureau/membrebureau.component';
import { MessagerecusComponent } from './Pages/messagerecus/messagerecus.component';
import { MotpresComponent } from './Pages/motpres/motpres.component';
import { OrganigrammebComponent } from './Pages/organigrammeb/organigrammeb.component';
import { ResponsablesComponent } from './Pages/responsables/responsables.component';
import { SportsComponent } from './Pages/sports/sports.component';
import { AjoutersportComponent } from './Pages/ajoutersport/ajoutersport.component';
import { ImagealbumComponent } from './Pages/imagealbum/imagealbum.component';
import { VideoalbumComponent } from './Pages/videoalbum/videoalbum.component';
import { ImageeventComponent } from './Pages/imageevent/imageevent.component';
import { VideoeventComponent } from './Pages/videoevent/videoevent.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import { ConventionsComponent } from './Pages/conventions/conventions.component';

const routes: Routes = [
  {path:'sport',component:SportsComponent},
  {path:'actualites',component:ActualitesComponent},
  {path:'joueurs',component:JoueursComponent},
  {path:'responsable',component:ResponsablesComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'matchs',component:MatchsComponent},
  {path:'membrebureau',component:MembrebureauComponent},
  {path:'motpres',component:MotpresComponent},
  {path:'changervideoacc',component:ChangervideoaccComponent},
  {path:'organigramme',component:MembrebureauComponent},
  {path:'contact',component:ContactComponent},
  {path:'equipes',component:EquipesComponent},
  {path:'catevent',component:CateventsComponent},
  {path:'listeevents',component:ListeeventsComponent},
  {path:'messagerecus',component:MessagerecusComponent},
  {path:'ajoutersport',component:AjoutersportComponent},
  {path:'ajouterimagealbum',component:ImagealbumComponent},
  {path:'ajoutervideoalbum',component:VideoalbumComponent},
  {path:'ajouterimageevent',component:ImageeventComponent},
  {path:'ajoutervideoevent',component:VideoeventComponent},
  {path:'',component:ConnexionComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'conventions',component:ConventionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

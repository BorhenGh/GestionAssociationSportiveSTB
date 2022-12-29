import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { AProposComponent } from './Pages/a-propos/a-propos.component';
import { ActualitesComponent } from './Pages/actualites/actualites.component';
import { SportComponent } from './Pages/sport/sport.component';
import { EvenementsComponent } from './Pages/evenements/evenements.component';
import { ResultatsComponent } from './Pages/resultats/resultats.component';
import { GalerieComponent } from './Pages/galerie/galerie.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AlbumimgComponent } from './Pages/albumimg/albumimg.component';
import { AlbumvidComponent } from './Pages/albumvid/albumvid.component';
import { EventsComponent } from './Pages/events/events.component';
import { VideogalComponent } from './Pages/videogal/videogal.component';
import { AlbumComponent } from './Pages/album/album.component';
import { EquipesComponent } from './Pages/equipes/equipes.component';
import { TeamComponent } from './Pages/team/team.component';
import { ResultatcatComponent } from './Pages/resultatcat/resultatcat.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'sport',component:SportComponent},
  {path:'actualites',component:ActualitesComponent},
  {path:'evenements',component:EvenementsComponent},
  {path:'resultats',component:ResultatsComponent},
  {path:'galerie/:id',component:GalerieComponent},
  {path:'about',component:AProposComponent},
  {path:'contact',component:ContactComponent},
  {path:'albumimg/:id',component:AlbumimgComponent},
  {path:'albumvid/:id',component:AlbumvidComponent},
  {path:'events/:id',component:EventsComponent},
  {path:'video/:id',component:VideogalComponent},
  {path:'equipes/:id',component:EquipesComponent},
  {path:'team/:id',component:TeamComponent},
  {path:'resultatcat/:id',component:ResultatcatComponent},
  {path:'album',component:AlbumComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

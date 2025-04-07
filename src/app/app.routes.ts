import { Routes } from '@angular/router';
import { MoviesComponent } from "./movies/movies.component";
import { HomeComponent } from "./home/home.component";
import { AddMovieComponent } from "./movies/add-movie/add-movie.component";
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { MyspaceComponent } from './myspace/myspace.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'myspace', component: MyspaceComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'admin', component: AdminpanelComponent }
];

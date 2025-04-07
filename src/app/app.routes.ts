import { Routes } from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";
import {HomeComponent} from "./home/home.component";
import {AddMovieComponent} from "./movies/add-movie/add-movie.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'add-movie', component: AddMovieComponent }
];

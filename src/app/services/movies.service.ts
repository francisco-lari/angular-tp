import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/movie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly httpClient = inject(HttpClient)
  private readonly url = "http://localhost:8080/movies"

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.url, movie);
  }

  deleteMovie(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}

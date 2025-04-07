import {Component, DestroyRef, inject} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Movie} from "../models/movie";
import {MoviesService} from "../services/movies.service";
import {RouterLink} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  private readonly moviesService = inject(MoviesService)
  movies!: Movie[];
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

  private destroyRef = inject(DestroyRef)
  deleteMovie(id: number): void {
    this.moviesService.deleteMovie(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() =>
      this.movies = this.movies.filter(film => film.id !== id)
    );
  }
}

import { Component, inject } from '@angular/core';
import { Movie } from "../../models/movie";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MoviesService } from "../../services/movies.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss'
})
export class AddMovieComponent {
  profileForm = new FormGroup({
    title: new FormControl(''),
    director: new FormControl(''),
    releaseDate: new FormControl(''),
    synopsis: new FormControl(''),
    rate: new FormControl('')
  });

  movie: Movie = {
    title: '',
    director: '',
    releaseDate: new Date(),
    synopsis: '',
    id: undefined,
    rate: undefined,
    image: undefined
  }

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Nouveau film ajouté !');
  }

  private readonly moviesService = inject(MoviesService)
  private readonly router = inject(Router)

  addMovie(): void {
    if (this.movie.title.toLocaleUpperCase() !== this.movie.title) {
      return;
    }
    const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    if (!regex.test(this.movie.director)) {
      return;
    }
    const today = new Date();
    if (this.movie.releaseDate <= today) {
      return;
    }
    if (this.movie.synopsis.length <= 30) {
      return;
    }

    this.moviesService.addMovie(this.movie).subscribe(
      () => {
        this.showSuccess()
        this.router.navigate(['/movies'])
      }
    );
  }
}

import { Component, inject } from '@angular/core';
import { Movie } from "../../models/movie";
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { MoviesService } from "../../services/movies.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss'
})
export class AddMovieComponent {
  profileForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z\s]+$/)]),
    director: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]+ [A-Z][a-z]+$/)]),
    releaseDate: new FormControl('', [Validators.required, this.dateBeforeTodayValidator()]),
    synopsis: new FormControl('', [Validators.required, Validators.minLength(30)])
  })


  dateBeforeTodayValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = new Date(control.value);
      const today = new Date();

      if (control.value && selectedDate >= today) {
        return { dateBeforeToday: true };
      }
      return null;
    };
  }

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Nouveau film ajouté !');
  }

  private readonly moviesService = inject(MoviesService)
  private readonly router = inject(Router)

  isReady(): boolean {
    return this.profileForm.valid;
  }

  addMovie(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const formValue = this.profileForm.value;

    const selectedDate = new Date(formValue.releaseDate || '');

    const movie: Movie = {
      title: formValue.title || '',
      director: formValue.director || '',
      releaseDate: selectedDate,
      synopsis: formValue.synopsis || ''
    };

    this.moviesService.addMovie(movie).subscribe(() => {
      this.showSuccess();
      this.router.navigate(['/movies']);
    });
  }
}

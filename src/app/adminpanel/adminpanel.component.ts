import { Component, inject } from '@angular/core';
import { User } from "../models/user";
import { Movie } from "../models/movie";
import { Review } from "../models/review";
import { UsersService } from '../services/users.service';
import { MoviesService } from "../services/movies.service";
import { ReviewService } from "../services/reviews.service";

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.scss'
})
export class AdminpanelComponent {
  private readonly moviesService = inject(MoviesService)
  private readonly usersService = inject(UsersService)
  private readonly reviewService = inject(ReviewService)

  movies!: Movie[];
  users!: User[];
  reviews!: Review[];
  average!: number;
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => this.movies = movies);
    this.usersService.getUsers().subscribe(users => this.users = users);
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
    this.moviesService.getAverage().subscribe(avg => this.average = avg);
  }

}

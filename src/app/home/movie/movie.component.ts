import {Component, Inject, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie',
  standalone: true,
    imports: [
        DatePipe
    ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  @Input({ required: true }) movie! : Movie
}

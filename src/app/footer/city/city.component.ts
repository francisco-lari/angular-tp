import { Component, Input } from '@angular/core';
import { City } from '../../models/city';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent {
  @Input({ required: true }) city!: City

}

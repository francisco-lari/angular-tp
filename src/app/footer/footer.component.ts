import { Component } from '@angular/core';
import { CityComponent } from '../footer/city/city.component'
import { City } from '../models/city';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CityComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  paris: City = { name: "Paris", cinemas: ["Beaugrenelle", "Champs-Elysées", "La Vilette"] };
  marseille: City = { name: "Marseille", cinemas: ["Madeleine", "Plan de campagne", "La Joliette"] };
  lyon: City = { name: "Lyon", cinemas: ["Vaise", "Carré de Soie", "Bellecour"] };
}

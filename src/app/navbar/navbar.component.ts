import { Component, Input } from '@angular/core';
import { UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input({ required: true }) title!: string
}

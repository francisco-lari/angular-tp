import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { User } from "../../models/user";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  user: User = {
    firstName: '',
    lastName: '',
    age: 0,
    email: ''
  }

  addUser(): void {
    if (this.user.firstName.toLocaleUpperCase() !== this.user.firstName) {
      return;
    }
    if (this.user.lastName.toLocaleUpperCase() !== this.user.lastName) {
      return;
    }
    if (this.user.age > 150 || this.user.age < 0) {
      return;
    }
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!regex.test(this.user.email)) {
      return;
    }
    /*
        this.moviesService.addMovie(this.movie).subscribe(
          () => {
            this.showSuccess()
            this.router.navigate(['/movies'])
          }
        );
        */
  }
  /**/
}

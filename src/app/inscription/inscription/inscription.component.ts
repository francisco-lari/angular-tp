import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { User } from "../../models/user";
import { UsersService } from '../../services/users.service';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {

  profileForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required
    ]),
    lastname: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(120)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  })

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Inscription réussie !');
  }

  isReady(): boolean {
    return this.profileForm.valid;
  }


  private readonly userService = inject(UsersService)
  private readonly router = inject(Router)

  submitForm() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const formValue = this.profileForm.value;

    const user: User = {
      firstName: formValue.firstname || '',
      lastName: formValue.lastname || '',
      age: formValue.age || 0,
      email: formValue.email || ''
    };

    this.userService.addUser(user).subscribe(() => {
      this.showSuccess();
      this.router.navigate(['/']);
    });
  }
}

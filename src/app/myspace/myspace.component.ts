import { Component, inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from "../models/user";


@Component({
  selector: 'app-myspace',
  standalone: true,
  imports: [],
  templateUrl: './myspace.component.html',
  styleUrl: './myspace.component.scss'
})
export class MyspaceComponent {
  private readonly usersService = inject(UsersService)
  user!: User;

  ngOnInit(): void {
    this.usersService.getUserWitID1().subscribe(user1 => this.user = user1);
  }



}

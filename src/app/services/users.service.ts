import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private readonly httpClient = inject(HttpClient);

  private readonly url = "http://localhost:8080/users";

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getUserWitID1(): Observable<User> {
    return this.httpClient.get<User>(this.url + "/" + 1);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserDetails } from '../interfaces/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetailsUrl = 'assets/json_files/user_details.json';
  constructor(private http : HttpClient) { }

  getUsernamePassword(): Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(this.userDetailsUrl);
  }

}

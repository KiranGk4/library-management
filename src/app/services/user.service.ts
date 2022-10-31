import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BookDetails } from '../interfaces/BookDetails';
import { BooksTaken } from '../interfaces/BooksTaken';
import { UserDetails } from '../interfaces/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetailsUrl = 'assets/json_files/user_details.json';
  bookDetailsUrl = 'assets/json_files/books.json';
  booksTakenUrl = 'assets/json_files/books_taken.json';
  constructor(private http : HttpClient) { }

  // Setsession(id:number){
  //   sessionStorage.setItem('userId',String(id));
  // }
  getSession():number{
    return Number(sessionStorage.getItem('userId'));
  }

  getUsernamePassword(): Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(this.userDetailsUrl);
  }

  getBooks(): Observable<BookDetails[]>{
    return this.http.get<BookDetails[]>(this.bookDetailsUrl)
  }

  getBooksTaken(): Observable<BooksTaken[]>{
    return this.http.get<BooksTaken[]>(this.booksTakenUrl);
  }
}

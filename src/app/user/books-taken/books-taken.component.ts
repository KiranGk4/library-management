import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { BookDetails } from 'src/app/interfaces/BookDetails';
import { BooksTaken } from 'src/app/interfaces/BooksTaken';
import { UserDetails } from 'src/app/interfaces/UserDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-books-taken',
  templateUrl: './books-taken.component.html',
  styleUrls: ['./books-taken.component.css']
})
export class BooksTakenComponent implements OnInit {

  booksTaken : BooksTaken[] = [];
  booksTaken2 : BookDetails[] = [];
  bookDetail : BookDetails[] = [];
  bookIds : any[] = [];
  userId : number = 0;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem('userId'));
    this.userService.getBooksTaken().subscribe(
      (booksTaken : BooksTaken[])=>{
        this.booksTaken = booksTaken.filter((obj)=>obj.id == this.userId);
        for(let i of this.booksTaken)
        {
          this.bookDetail  = i.books;
        }
      }
    )
  }

}

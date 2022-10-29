import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/interfaces/BookDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private _booksFilter : string = '';
  booksFiltered : BookDetails[] = [];
  bookDetails : BookDetails[] = [];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getBooks().subscribe(
      (bookDetails : BookDetails[])=>{
        this.bookDetails = bookDetails;
        this.booksFiltered = bookDetails;
        // console.log(bookDetails);
      }
    )
  }

  get booksFilter():string{
    return this._booksFilter;
  }

  set booksFilter(value : string){
    this._booksFilter = value;
    this.booksFiltered = this.performFilter(value);
  }

  performFilter(value : string):BookDetails[]{
    value = value.toLocaleLowerCase();
    return this.bookDetails.filter((book:BookDetails)=>
      book.bookName.toLocaleLowerCase().includes(value)
    )
  }
}

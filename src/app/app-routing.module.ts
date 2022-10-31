import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooksTakenComponent } from './user/books-taken/books-taken.component';
import { BooksComponent } from './user/books/books.component';
import { HomeUserComponent } from './user/home-user/home-user.component';

const routes: Routes = [
  { path : '', redirectTo : '/login', pathMatch : 'full'},
  { path : 'login', component : LoginComponent},
  { path : 'userHome', component : HomeUserComponent},
  { path : 'userBooks', component : BooksComponent},
  { path : 'booksTaken', component : BooksTakenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

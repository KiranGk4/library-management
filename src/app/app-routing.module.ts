import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './user/books/books.component';
import { HomeUserComponent } from './user/home-user/home-user.component';

const routes: Routes = [
  { path : '', redirectTo : '/login', pathMatch : 'full'},
  { path : 'login', component : LoginComponent},
  { path : 'userHome/:id', component : HomeUserComponent},
  { path : 'userBooks', component : BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

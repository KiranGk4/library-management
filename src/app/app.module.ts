import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { BooksComponent } from './user/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    HomeUserComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

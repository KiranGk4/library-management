import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from '../interfaces/UserDetails';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle = "Login";
  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  });
  userDetail : UserDetails[] = [];
  
  constructor(private route: Router, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUsernamePassword().subscribe(
      (userDetail : UserDetails[])=>{
        this.userDetail = userDetail;
      }
    )
  }

  goToUserHome(): void{
    console.log(this.loginForm.value.username);
    for(let i of this.userDetail)
    {
      if((i.username == this.loginForm.value.username) && (i.password == this.loginForm.value.password))
      {
        console.log('Success');
        this.route.navigate(['/userHome/'+i.id]);
      }
      else
      {
        console.log('Invalid');
      }
    }
    
  }
  
}

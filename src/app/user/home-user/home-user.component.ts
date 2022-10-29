import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/interfaces/UserDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  userDetail : UserDetails[] = [];
  constructor(private userService : UserService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getUsernamePassword().subscribe(
      (userDetail : UserDetails[])=>{
        this.userDetail = userDetail.filter((obj)=>obj.id == id)
      }
    )
  }

}

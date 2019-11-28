import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/data/model/user/data.model.user.service';
import { User } from 'src/types/user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get('123').subscribe(
      user => {
        this.user = user;
        console.log(this.user);
      }
    );
  }

}

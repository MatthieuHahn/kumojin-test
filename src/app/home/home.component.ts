import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/data/kumojin/user/data.kumojin.user.service';
import { User } from 'src/types/user/user';
import { TimeService } from 'src/services/time/time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  userId: number;
  message: String = '';

  isUserTimezoneSameAsNavigator: Boolean = false;
  currentUserTime: String = '';
  currentNavigatorTime: String = '';
  timerId: any;

  constructor(private userDataService: UserDataService, private timeService: TimeService) { }

  ngOnInit() {
  }

  // ///////////////////////////////////////////////

  validateUserId() {
    this.userDataService
      .get(this.userId)
      .subscribe(
        user => this.displayUserTimes(user),
        error => this.displayErrorMessage(error)
      );
  }

  // ///////////////////////////////////////////////

  private displayUserTimes(user) {
    this.message = 'I found a user !';
    this.user = user;
    this.isUserTimezoneSameAsNavigator = this.timeService.isSameTimezoneAsCurrentTimezone(this.user.timezone);

    this.timerId = setInterval(() => {
      this.currentUserTime = this.timeService.getSpecificTimezoneTime(this.user.timezone);
      this.currentNavigatorTime = this.timeService.getNowTime();
    }, 1000);
  }

  private displayErrorMessage(error) {
    console.error(error);
    this.message = 'Oops, no user found';
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.currentUserTime = '';
    this.currentNavigatorTime = '';
  }
}

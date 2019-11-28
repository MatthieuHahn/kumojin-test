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

  isUserTimezoneSameAsNavigator: Boolean = false;
  currentUserTime: String = '';
  currentNavigatorTime: String = '';

  constructor(private userDataService: UserDataService, private timeService: TimeService) { }

  ngOnInit() {
  }

  validateUserId() {
    this.userDataService
      .get(this.userId)
      .subscribe(
        user => {
          this.user = user;
          this.isUserTimezoneSameAsNavigator = this.timeService.isSameTimezoneAsCurrentTimezone(this.user.timezone);

          setInterval(() => {
            this.currentUserTime = this.timeService.getSpecificTimezoneTime(this.user.timezone);
            this.currentNavigatorTime = this.timeService.getNowTime();
          }, 1000);
        }
      );
  }
}

import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private timeFormat: any = 'HH:mm:ss';
  private currentTimezone: string = moment.tz.guess();


  constructor() {

  }

  isSameTimezoneAsCurrentTimezone(timezone) {
    const currentTime = Date.now();
    return moment.tz.zone(timezone).utcOffset(currentTime) === moment.tz.zone(this.currentTimezone).utcOffset(currentTime);
  }

  getSpecificTimezoneTime(timezone) {
    return moment().add(this.calculateDifference(this.currentTimezone, timezone), 'minute').format(this.timeFormat);
  }

  getNowTime() {
    return moment().format(this.timeFormat);
  }

  calculateDifference(timezone1, timezone2) {
    const currentTime = Date.now();
    const currentTimezoneOffset = moment.tz.zone(timezone1).utcOffset(currentTime);
    const givenTimezoneOffset = moment.tz.zone(timezone2).utcOffset(currentTime);
    return currentTimezoneOffset - givenTimezoneOffset;
  }

}

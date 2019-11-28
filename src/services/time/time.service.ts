import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private timeFormat: string = 'HH:mm:ss';

  constructor() { }

  isSameTimezoneAsCurrentTimezone(timezone) {
    const currentTime = Date.now();

    return moment.tz.zone(timezone).utcOffset(currentTime) === moment.tz.zone(moment.tz.guess()).utcOffset(currentTime);
  }

  getSpecificTimezoneTime(timezone) {
    return moment.tz(moment().format(), timezone).format(this.timeFormat);
  }

  getNowTime() {
    return moment().format(this.timeFormat);
  }

}

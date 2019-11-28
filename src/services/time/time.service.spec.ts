import { TestBed } from '@angular/core/testing';
import { TimeService } from './time.service';
import * as moment from 'moment-timezone';

describe('TimeService', () => {
  const service = new TimeService();
  const currentTimezone = moment.tz.guess();;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#isSameTimezoneAsCurrentTimezone should return true if given timezone is the same as local timezone', () => {
    expect(service.isSameTimezoneAsCurrentTimezone(currentTimezone)).toBeTruthy();
  });

  it('#calculateDifference should return 0 if the 2 timezones are the same', () => {
    expect(service.calculateDifference(currentTimezone, currentTimezone)).toEqual(0);
  });

  it('#calculateDifference should return 360 if the 2 timezones are America/Montreal and Europe/Paris', () => {
    expect(service.calculateDifference('America/Montreal', 'Europe/Paris')).toEqual(360);
  });
});

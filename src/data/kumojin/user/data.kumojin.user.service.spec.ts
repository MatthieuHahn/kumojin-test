import { TestBed } from '@angular/core/testing';

import { UserDataService } from './data.kumojin.user.service';

describe('UserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
  });
});

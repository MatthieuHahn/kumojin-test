import { TestBed } from '@angular/core/testing';

import { Data.Kumojin.UserService } from './data.kumojin.user.service';

describe('Data.Kumojin.UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.Kumojin.UserService = TestBed.get(Data.Kumojin.UserService);
    expect(service).toBeTruthy();
  });
});

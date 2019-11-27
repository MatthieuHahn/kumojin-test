import { TestBed } from '@angular/core/testing';

import { Data.Model.UserService } from './data.model.user.service';

describe('Data.Model.UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.Model.UserService = TestBed.get(Data.Model.UserService);
    expect(service).toBeTruthy();
  });
});

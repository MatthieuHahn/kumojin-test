import { TestBed, getTestBed } from '@angular/core/testing';
import { UserDataService } from './data.kumojin.user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserDataService', () => {
  let injector: TestBed;
  let service: UserDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserDataService]
    });
    injector = getTestBed();
    service = injector.get(UserDataService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

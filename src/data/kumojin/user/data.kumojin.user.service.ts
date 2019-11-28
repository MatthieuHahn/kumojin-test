import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/types/user/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<User> {
    return this.http
      .get('https://test.api.kumojin.com/users/' + id)
      .pipe(
        map((user: User) => user));

  }
}

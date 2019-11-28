import { Injectable } from '@angular/core';
import { UserDataService } from 'src/data/kumojin/user/data.kumojin.user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userDataService: UserDataService) { }

  get(id) {
    return this.userDataService.get(id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILoginMessage } from 'src/app/models/ILoginMessage.interfaces';
import { User } from 'src/app/models/IUser.interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor(private _http: HttpClient, private _storageService: StorageService) { }

  login(username: string, password: string): Subject<ILoginMessage> {
    let subject = new Subject<ILoginMessage>();
    this._http.get<User[]>('assets/json/user.json').subscribe((data: User[]) => {
      this.users = data;
      let user = data.filter((el) => el.password === password && el.username === username);
      let hasUser = data.filter((el) => el.username === username);
      if (user.length) {
        this._storageService.logIn();
        subject.next({ok: true, message: 'Successfully logged in.'});
      } else {
        subject.next({ok: false, message: hasUser.length ? 'Wrong password' : 'Username does not exist'});
      }
    });
    return subject;
  }

  register(username: string, password: string) {
    let subject = new Subject<ILoginMessage>();
    this._http.get<User[]>('assets/json/users.json').subscribe((data: User[]) => {
      let hasUser = data.filter((el) => el.username === username);
      if (hasUser.length) {
        subject.next({ok: false, message: 'User with this username already exists'});
      } else {
        this.users.push({username: username, password: password});
        subject.next({ok: true, message: 'Success'});
      }
    });
    return subject;
  }
}

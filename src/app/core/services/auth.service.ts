import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import {User} from '../models/user';
import {LocalService} from './local.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registered: boolean;

  private user: User = {
    username: '',
    password: '',
    acceptTerms: false,
  };

  public userName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public isRegistered: Observable<boolean> = new Observable<boolean>((obs) => {
    obs.next(this.registered);
  });

  subscribe: Subscription;

  constructor(private localService: LocalService) {
    this.registered = Boolean(this.localService.getData('name'));
    this.isRegistered.subscribe((i) => {
      this.registered = i;
    });
  }

  login(userInfo: User): void {
    if (!this.user.username && !this.user.password) {
      this.user.username = '';
      this.user.password = '';
    }

    this.user.username = userInfo.username;
    this.user.password = userInfo.password;

    this.localService.saveData('name', this.user.username);
    this.localService.saveData('password', this.user.password);

    this.registered = true;
    this.userName.next(this.user.username);
  }

  logout(): void {
    this.localService.clearData();

    this.registered = false;
    this.userName.next(this.user.username);
  }

  getName(): Subject<string> {
    const userName = this.localService.getData('name');

    if (userName) this.userName.next(userName);

    return this.userName;
  }
}

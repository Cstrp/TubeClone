import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {distinctUntilChanged, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styles: [
    `
      h3 {
        margin-top: 10px;
      }
    `,
  ],
})
export class LogInfoComponent implements OnInit {
  userName: string;

  private _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .getName()
      .pipe(takeUntil(this._unsubscribe$), distinctUntilChanged())
      .subscribe((value) => {
        this.userName = value;
      });
  }
}

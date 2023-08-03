import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private spinnerService: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.show();

    setTimeout(() => this.spinnerService.hide(), 1000);
  }
}

import {Component, OnInit} from '@angular/core';
import {SortService} from '../../../services/sort.service';

@Component({
  selector: 'app-sort-by-date-btn',
  templateUrl: './sort-by-date-btn.component.html',
})
export class SortByDateBtnComponent implements OnInit {
  constructor(public sortService: SortService) {}

  ngOnInit(): void {}
}

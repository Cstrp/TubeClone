import {Component, OnInit} from '@angular/core';
import {SortService} from '../../../services/sort.service';

@Component({
  selector: 'app-sort-by-view-btn',
  templateUrl: './sort-by-view-btn.component.html',
})
export class SortByViewBtnComponent implements OnInit {
  constructor(public sortService: SortService) {}

  ngOnInit(): void {}
}

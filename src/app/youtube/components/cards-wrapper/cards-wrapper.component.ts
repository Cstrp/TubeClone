import {Component, OnInit} from '@angular/core';
import {DataShareService} from '../../../core/services/datashare.service';
import {SortService} from '../../../core/services/sort.service';
import {Items} from '../../../core/models/items';

@Component({
  selector: 'app-cards-wrapper',
  templateUrl: './cards-wrapper.component.html',
})
export class CardsWrapperComponent implements OnInit {
  public _video$: Items[];

  constructor(private dataShareService: DataShareService, private sortService: SortService) {
    this.dataShareService._mockVideo.subscribe((value) => {
      this._video$ = value;
    });
  }

  ngOnInit(): void {}

  getFilterByInputValue() {
    return this.sortService.inputValue;
  }

  sortByValue() {
    return this.sortService.sortBy;
  }
}

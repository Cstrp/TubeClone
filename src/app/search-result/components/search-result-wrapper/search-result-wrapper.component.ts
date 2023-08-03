import {Component, OnInit} from '@angular/core';
import {Items} from '../../../core/models/items';
import {SearchService} from '../../../core/services/search.service';
import {SortService} from '../../../core/services/sort.service';

@Component({
  selector: 'app-search-result-wrapper',
  templateUrl: './search-result-wrapper.component.html',
})
export class SearchResultWrapperComponent implements OnInit {
  video: Items[] = [];

  constructor(private searchService: SearchService, private sortService: SortService) {}

  ngOnInit(): void {
    this.searchService._video$.subscribe((i) => (this.video = i));
  }

  getFilterByInputValue() {
    return this.sortService.inputValue;
  }
}

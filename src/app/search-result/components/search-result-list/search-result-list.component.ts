import {Component, Input, OnInit} from '@angular/core';
import {Items} from '../../../core/models/items';
import {YouTubeResponseService} from '../../../core/services/youtube-response.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
})
export class SearchResultListComponent implements OnInit {
  @Input() video: Items;

  constructor(private U: YouTubeResponseService) {
    this.U.fetchVideoById('DttTRPKdq-0').subscribe((value) => console.log(value));
  }

  ngOnInit(): void {}
}

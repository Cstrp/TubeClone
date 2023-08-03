import {Injectable} from '@angular/core';
import {BehaviorSubject, debounceTime, distinctUntilChanged, Subject} from 'rxjs';
import {Items} from '../models/items';
import {YouTubeResponseService} from './youtube-response.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public _video$: BehaviorSubject<Items[]> = new BehaviorSubject<Items[]>([]);

  public _detailVide$: Subject<Items>;

  card: Items[] = [];

  constructor(private youtubeService: YouTubeResponseService) {}

  searchHandler(value: string) {
    this.youtubeService
      .fetchVideo(value)
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(
        (item) => {
          this._video$.next(item);
        },
        (error) => console.error(error),
      );

    console.log(this._video$);
  }

  getCardById(id: string) {
    this.youtubeService.fetchVideoById(id).subscribe((card) => {
      this._detailVide$.next(card[0]);
      this.card = card;
    });
  }
}

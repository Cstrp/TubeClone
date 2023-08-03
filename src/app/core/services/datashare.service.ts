import {Injectable} from '@angular/core';
import {YouTubeResponseService} from './youtube-response.service';
import {BehaviorSubject, catchError, throwError} from 'rxjs';
import {Items} from '../models/items';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  public _mockVideo: BehaviorSubject<Items[]> = new BehaviorSubject<Items[]>([]);

  constructor(private youtubeService: YouTubeResponseService) {
    this.getVideo();
  }

  getVideo() {
    this.youtubeService.fetchVideoFromMkApi().subscribe(
      (value) => {
        if (!value) return [];

        return this._mockVideo.next(value);
      },
      catchError((err) => throwError(err)),
    );
  }
}

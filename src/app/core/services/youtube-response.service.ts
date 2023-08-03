import {Inject, Injectable} from '@angular/core';
import {API_KEY, API_URL, API_URL_ID, injectKey, injectUrl, MOCK_URL} from '../../shared/utils/_api';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import {YoutubeResponse} from '../models/youtube-responce';
import {Items} from '../models/items';

@Injectable({
  providedIn: 'root',
})
export class YouTubeResponseService {
  private nextPageToken: string = '';

  @Inject(injectUrl) private readonly url: string = API_URL;

  @Inject(injectKey) private readonly key: string = API_KEY;

  @Inject(injectUrl) private readonly mockUrl: string = MOCK_URL;

  @Inject(injectUrl) private readonly urlId: string = API_URL_ID;

  constructor(private http: HttpClient) {}

  fetchVideo(query?: string): Observable<Items[]> {
    return this.fetchData(<string>query).pipe(
      map((value) => {
        if (!value) return [];
        this.nextPageToken = value.nextPageToken;

        return value.items;
      }),
      catchError((err) => {
        return throwError(err);
      }),
    );
  }

  fetchVideoById(id: string): Observable<Items[]> {
    return this.fetchDataById(id).pipe(
      map((value) => {
        if (!value) return [];

        return value.items;
      }),
      catchError((err) => {
        return throwError(err);
      }),
    );
  }

  fetchVideoFromChannel(channel: string): Observable<Items[]> {
    return this.fetchData(channel).pipe(
      map((value) => {
        if (!value) return [];

        return value.items;
      }),
      catchError((err) => {
        return throwError(err);
      }),
    );
  }

  fetchVideoFromMkApi(): Observable<Items[]> {
    return this.http.get<YoutubeResponse>(this.mockUrl).pipe(
      map((items) => {
        if (!items) return [];

        return items.items;
      }),
      catchError((err) => {
        return throwError(err);
      }),
    );
  }

  private fetchData(query: string): Observable<YoutubeResponse> {
    const param = ['part=snippet', 'maxResults=20', `q=${query}`, 'regionCode=ru', 'type=video', `key=${this.key}`];

    const url = `${this.url}?${param.join('&')}`;

    return this.http.get<YoutubeResponse>(url);
  }

  private fetchDataById(id: string): Observable<YoutubeResponse> {
    const paam = ['part=snippet', `key=${this.key}`];

    const url = `${this.urlId}?${paam.join('&')}&id=${id}`;

    return this.http.get<YoutubeResponse>(url);
  }
}

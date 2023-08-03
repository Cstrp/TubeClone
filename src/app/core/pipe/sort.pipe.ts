import {Pipe, PipeTransform} from '@angular/core';
import {Items} from '../models/items';

@Pipe({
  name: 'sort',
  pure: true,
})
export class SortPipe implements PipeTransform {
  transform(value: Items[], query: string): Items[] {
    const [name, props] = query.split(':');

    if (name === 'view') {
      if (props !== 'viewDown') {
        value.sort((a, b) => {
          return Number(b.snippet.statistics.viewCount) - Number(a.snippet.statistics.viewCount);
        });
      } else {
        value.sort((a, b) => {
          return Number(a.snippet.statistics.viewCount) - Number(b.snippet.statistics.viewCount);
        });
      }
    } else if (name === 'date') {
      if (props !== 'dateDown') {
        value.sort((a, b) => {
          const first = new Date(a.snippet.publishedAt).getTime();
          const second = new Date(b.snippet.publishedAt).getTime();

          return first - second;
        });
      } else {
        value.sort((a, b) => {
          const first = new Date(a.snippet.publishedAt).getTime();
          const second = new Date(b.snippet.publishedAt).getTime();

          return second - first;
        });
      }
    }

    return value;
  }
}

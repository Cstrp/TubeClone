import {Pipe, PipeTransform} from '@angular/core';
import {Items} from '../models/items';

@Pipe({
  name: 'filterByTitle',
  pure: true,
})
export class FilterByTitlePipe implements PipeTransform {
  transform(items: Items[], query: string) {
    if (items && query) {
      items = items.filter((value) => {
        return value.snippet.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });

      return items;
    }

    return items;
  }
}

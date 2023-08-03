import {Pipe, PipeTransform} from '@angular/core';
import {Items} from '../models/items';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(item: Items[], query: string) {
    if (item && query) {
      item = item.filter((value) => {
        return value.snippet.subTitle.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });

      return item;
    }

    return item;
  }
}

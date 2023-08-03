import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  public showSettings: boolean = false;

  public sortBy: string = ':';

  public inputValue: string = '';

  constructor() {}

  toggleSettings(): void {
    this.showSettings = !this.showSettings;
  }

  sortByView() {
    const [name, props] = this.sortBy.split(':');

    if (name !== 'view') {
      this.sortBy = 'view:viewUp';
    } else {
      this.sortBy = props === 'viewUp' ? 'view:viewDown' : 'view:viewUp';
    }
  }

  sortByDate() {
    const [name, props] = this.sortBy.split(':');

    if (name !== 'date') {
      this.sortBy = 'date:dateUp';
    } else {
      this.sortBy = props === 'dateUp' ? 'date:dateDown' : 'date:dateUp';
    }
  }
}

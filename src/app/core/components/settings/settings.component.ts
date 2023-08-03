import {Component, OnInit} from '@angular/core';
import {SortService} from '../../services/sort.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  constructor(public sortService: SortService) {}

  ngOnInit(): void {}

  filterValue(evt: Event) {
    if (evt.target instanceof HTMLInputElement) {
      this.sortService.inputValue = evt.target.value;
    }
  }
}

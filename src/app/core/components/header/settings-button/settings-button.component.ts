import {Component, OnInit} from '@angular/core';
import {SortService} from '../../../services/sort.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
})
export class SettingsButtonComponent implements OnInit {
  visible: boolean = this.settingsService.showSettings;

  constructor(private settingsService: SortService) {}

  ngOnInit(): void {}

  toggleShowSettings(): void {
    this.settingsService.toggleSettings();
  }
}

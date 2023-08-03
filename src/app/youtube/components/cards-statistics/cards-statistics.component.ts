import {Component, Input, OnInit} from '@angular/core';
import {Statistics} from '../../../core/models/statistics';

@Component({
  selector: 'app-cards-statistics',
  templateUrl: './cards-statistics.component.html',
})
export class CardsStatisticsComponent implements OnInit {
  @Input() statistics: Statistics;

  constructor() {}

  ngOnInit(): void {}
}

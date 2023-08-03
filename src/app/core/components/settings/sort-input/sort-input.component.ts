import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort-input',
  templateUrl: './sort-input.component.html',
})
export class SortInputComponent implements OnInit {
  @Output() filterInput = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

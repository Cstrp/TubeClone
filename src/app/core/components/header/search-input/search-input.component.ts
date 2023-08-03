import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, fromEvent, pluck} from 'rxjs';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  form: FormGroup;

  @ViewChild('input') inputElement!: ElementRef;

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    this.form = new FormGroup<object>({
      value: new FormControl('', Validators.required),
    });
  }

  ngAfterViewInit() {
    if (this.inputElement) {
      fromEvent<KeyboardEvent>(this.inputElement.nativeElement, 'keyup')
        .pipe(
          debounceTime(300),
          filter((key: KeyboardEvent) => key.key === 'Enter'),
          pluck('target', 'value'),
          distinctUntilChanged(),
        )
        .subscribe(
          () => {
            this.inputElement.nativeElement.value = '';
          },
          (error) => console.error(error),
        );
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {dateValidator} from '../../../shared/utils/_dateValidator';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {_dateFormat} from '../../../shared/utils/_dateFormat';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: _dateFormat,
    },
  ],
})
export class AdminPanelComponent implements OnInit {
  public cardForm: FormGroup;

  public today: Date | null = new Date();

  preview: string = '';

  public submitted: Boolean = false;

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(225)]],
      linkForImage: [
        '',
        [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
      ],
      linkForVideo: [
        '',
        [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
      ],
      creationDate: [null, [dateValidator]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.cardForm.controls;
  }

  getErrorMessage(val: string): string {
    const regexPattern =
      /^(([1-9])|([0][1-9])|([1-2][0-9])|([3][0-1]))(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\d{4}$/gi;

    const value = val.replace(/\s+/g, '');
    const isValid = regexPattern.test(value);

    if (!isValid && val !== '') {
      return 'Invalid input: Please input a string in the form of DD MMM YYYY';
    }

    return '';
  }

  save() {
    this.preview = JSON.stringify(this.cardForm.value);
    console.log(this.preview);
    this.cardForm.reset();
  }
}

// url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]

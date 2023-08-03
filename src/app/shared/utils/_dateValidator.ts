import {AbstractControl} from '@angular/forms';

const dateValidator = (control: AbstractControl): {[key: string]: boolean} | null => {
  const validator =
    /^(([1-9])|([0][1-9])|([1-2][0-9])|([3][0-1]))(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\d{4}$/gi;

  let val = control.value;
  const isValid = validator.test(val);

  if (isValid) {
    return {dateRegex: true};
  }

  return null;
};

export {dateValidator};

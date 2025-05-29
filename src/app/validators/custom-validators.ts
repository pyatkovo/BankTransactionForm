import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {
  static onlyLetters(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const pattern = /^[А-Яа-яA-Za-zЁё]+$/;
    return pattern.test(value) ? null : { onlyLetters: true };
  }

  static adult(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const birthDate = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) age--;

    return age >= 18 ? null : { underage: true };
  }

  static documentNumberLength(control: AbstractControl): ValidationErrors | null {
    const documentNumber = control.value;
    if (!documentNumber) return null;
    const parent = control.parent;
    if (!parent) return null;

    const documentType = parent.get('documentType')?.value;
    const length = documentNumber.length;

    switch (documentType) {
      case 'snils':
        return length === 11 ? null : { invalidSnils: true };
      case 'inn':
        return length === 12 ? null : { invalidInn: true };
      case 'passport':
        return length === 9 ? null : { invalidPassport: true };
      default:
        return null;
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "./validators/custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      clientInfo: this.fb.group({
        firstName: ['', [Validators.required, CustomValidators.onlyLetters, Validators.minLength(2), Validators.maxLength(50)]],
        lastName: ['', [Validators.required, CustomValidators.onlyLetters, Validators.minLength(2), Validators.maxLength(50)]],
        middleName: ['', [CustomValidators.onlyLetters, Validators.minLength(2), Validators.maxLength(50)]],
        gender: ['male', [Validators.required]],
        birthDate: ['', [Validators.required, CustomValidators.adult]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^(\+7|7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/)]],
        passport: ['', [Validators.required, Validators.pattern(/^\d{4}\s\d{6}$/)]],
      }),
      address: this.fb.group({
        country: ['', [Validators.required]],
        region: ['', [Validators.required, CustomValidators.onlyLetters, Validators.minLength(3)]],
        city: ['', [Validators.required, Validators.minLength(3)]],
        street: ['', [Validators.required, Validators.minLength(3)]],
        house: ['', [Validators.required, Validators.minLength(1)]],
        apartment: ['', [Validators.pattern(/^\d+$/)]],
        postalCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      }),
      bankDetails: this.fb.group({
        accountNumber: ['', [Validators.required, Validators.pattern(/^\d{20}$/)]],
        bic: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
        bankName: ['', [Validators.required, Validators.minLength(3)]],
        correspondentAccount: ['', [Validators.required, Validators.pattern(/^\d{20}$/)]],
      }),
      transactionInfo: this.fb.group({
        transactionType: ['', [Validators.required]],
        amount: ['', [Validators.required, Validators.min(1)]],
        currency: ['', [Validators.required]],
        comment: ['', [Validators.maxLength(200)]],
      }),
      documents: this.fb.array([
        this.fb.group({
          documentType: ['passport', Validators.required],
          documentNumber: ['', [Validators.required, CustomValidators.documentNumberLength, Validators.pattern(/^\d+$/)]],
          issueDate: ['', Validators.required],
        })
      ])
    })
  }

  //Отправка формы
  onSubmit() {
    console.log('Данные формы:', this.form.value);
    alert('Форма была успешно отправлена!')
    this.clearForm()
  }

//Очистка формы
  clearForm() {
    this.form.reset()
  }

//Геттеры для получения необходимой группы
  get clientInfoForm(): FormGroup {
    return this.form.get('clientInfo') as FormGroup;
  }

  get addressForm(): FormGroup {
    return this.form.get('address') as FormGroup;
  }

  get bankDetails(): FormGroup {
    return this.form.get('bankDetails') as FormGroup;
  }

  get transactionInfo(): FormGroup {
    return this.form.get('transactionInfo') as FormGroup;
  }

  get documents(): FormArray {
    return this.form.get('documents') as FormArray;
  }


}

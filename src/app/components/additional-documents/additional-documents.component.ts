import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../validators/custom-validators";

@Component({
  selector: 'app-additional-documents',
  templateUrl: './additional-documents.component.html',
  styleUrls: ['./additional-documents.component.scss']
})
export class AdditionalDocumentsComponent implements OnInit {
  @Input() documents!: FormArray;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  get documentsFormGroups(): FormGroup[] {
    return this.documents.controls as FormGroup[];
  }

  addDocument() {
    const docGroup = this.fb.group({
      documentType: ['passport', Validators.required],
      documentNumber: ['', [Validators.required, CustomValidators.documentNumberLength, Validators.pattern(/^\d+$/)]],
      issueDate: ['', Validators.required],
    });
    this.documents.push(docGroup);
  }

  removeDocument(index: number) {
    this.documents.removeAt(index);
  }

}

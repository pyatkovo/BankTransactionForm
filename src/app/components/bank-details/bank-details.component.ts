import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
  @Input() bankDetails!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

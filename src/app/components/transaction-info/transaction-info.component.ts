import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.scss']
})
export class TransactionInfoComponent implements OnInit {
  @Input() transactionInfo!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

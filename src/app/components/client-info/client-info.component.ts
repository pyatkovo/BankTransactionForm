import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  @Input() clientInfo!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Country} from "../../types/form-data.type";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() address!: FormGroup;
  countries: Country[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Country[]>('assets/countries.json').subscribe(data => {
      this.countries = data;

    });
  }

}

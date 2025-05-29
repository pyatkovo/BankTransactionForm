import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { AddressComponent } from './components/address/address.component';
import { TransactionInfoComponent } from './components/transaction-info/transaction-info.component';
import { AdditionalDocumentsComponent } from './components/additional-documents/additional-documents.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    BankDetailsComponent,
    AddressComponent,
    TransactionInfoComponent,
    AdditionalDocumentsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export type FullFormData = {
  clientInfo: ClientInfo;
  address: Address;
  bankDetails: BandDetails;
  transactionInfo: TransactionInfo;
  documents: Document[];
}

export type ClientInfo = {
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: 'male' | 'female';
  birthDate: Date;
  email: string;
  phone: string;
  passport: string;
}
export type Address = {
  country: string;
  region: string;
  city: string;
  street: string;
  house: string;
  apartment?: string;
  postalCode: string;
}
export type BandDetails = {
  accountNumber: string;
  bic: string;
  bankName: string;
  correspondentAccount: string
}
export type TransactionInfo = {
  transactionType: 'transfer' | 'payment' | 'replenishment';
  amount: number;
  currency: 'RUB' | 'USD' | 'EUR';
  comment?: string;
}
export type Document = {
  documentType: 'passport' | 'snils' | 'inn';
  documentNumber: string;
  issueDate: Date;
}

export type Country = {
  id: number;
  alpha2: string;
  alpha3: string;
  name: string;
}

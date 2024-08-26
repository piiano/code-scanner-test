import {BankAccount} from './BankAccount';
import {Address} from './Address';
import {CustomerAdvisors} from './CustomerAdvisors';

export interface Client {
  no: number;
  id: string;
  firstName: string;
  lastName: string;
  cnp: number;
  email: string;
  phoneNumber: string;
  bankAccount: BankAccount | null;
  address: Address | null;
  customerAdvisors: CustomerAdvisors | null;
}

export class ClientClass implements Client {
  public static LUKE: Client = new ClientClass(
    '001',
    'Luke',
    'Skywalker',
    1,
    'luke.skywalker@fake.com',
    '123',
    null,
    null,
    null
  );

  no: number;
  id: string;
  firstName: string;
  lastName: string;
  cnp: number;
  email: string;
  phoneNumber: string;
  bankAccount: BankAccount | null;
  address: Address | null;
  customerAdvisors: CustomerAdvisors | null;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    cnp: number,
    email: string,
    phoneNumber: string,
    address: Address | null,
    customerAdvisors: CustomerAdvisors | null,
    bankAccount: BankAccount | null
  ) {
    this.no = 0; // Assume auto-generated
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cnp = cnp;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.bankAccount = bankAccount;
    this.customerAdvisors = customerAdvisors;
  }

  toString(): string {
    let result = `\nClient no. ${this.no}\nId: ${this.id}\nFirst name: ${this.firstName}\nLast name: ${this.lastName}\nCNP: ${this.cnp}\nEmail: ${this.email}\nPhone: ${this.phoneNumber}`;
    if (this.address) result += `\nAdresa clientului: ${this.address}`;
    if (this.customerAdvisors) result += `${this.customerAdvisors}`;
    return result;
  }
}

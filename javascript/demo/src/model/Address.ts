import { Client } from './Client';
import { CustomerAdvisors } from './CustomerAdvisors';
import { BankAgency } from './BankAgency';

export interface Address {
  no: number;
  city: string;
  county: string;
  houseNumber: string;
  blockOfFlatsNumber: string;
  apartment: string;
  street: string;
  client?: Client | null;
  customerAdvisors?: CustomerAdvisors | null;
  bankAgency?: BankAgency | null;
}

export class AddressClass implements Address {
  no: number;
  city: string;
  county: string;
  houseNumber: string;
  blockOfFlatsNumber: string;
  apartment: string;
  street: string;
  client?: Client | null;
  customerAdvisors?: CustomerAdvisors | null;
  bankAgency?: BankAgency | null;

  constructor(
    no: number,
    city: string,
    county: string,
    street: string,
    houseNumber: string,
    blockOfFlatsNumber: string,
    apartment: string
  ) {
    this.no = no;
    this.city = city;
    this.county = county;
    this.street = street;
    this.houseNumber = houseNumber;
    this.blockOfFlatsNumber = blockOfFlatsNumber;
    this.apartment = apartment;
  }

  toString(): string {
    return `\nAddress ${this.no}: ${this.county ? 'County ' + this.county + ', ' : ''}${this.city ? 'City ' + this.city + ', ' : ''}${this.street ? 'St. ' + this.street + ', ' : ''}${this.houseNumber ? 'No. ' + this.houseNumber : ''}${this.blockOfFlatsNumber ? 'Block No. ' + this.blockOfFlatsNumber + ', ' : ''}${this.apartment ? 'Apt. ' + this.apartment : ''}`;
  }
}

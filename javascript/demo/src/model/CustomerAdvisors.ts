import {Address} from './Address';
import {BankAgency} from './BankAgency';
import {Client} from './Client';
import {CustomerAdvisorsPassword} from './CustomerAdvisorsPassword';

export interface CustomerAdvisors {
  id: number;
  firstName: string;
  lastName: string;
  cnp: string;
  positionHeld: string;
  phoneNumber: string;
  client: Client[];
  bankAgency: BankAgency;
  address: Address;
  customerAdvisorsPassword: CustomerAdvisorsPassword;
}

export class CustomerAdvisorsClass implements CustomerAdvisors {
  id: number;
  firstName: string;
  lastName: string;
  cnp: string;
  positionHeld: string;
  phoneNumber: string;
  client: Client[];
  bankAgency: BankAgency;
  address: Address;
  customerAdvisorsPassword: CustomerAdvisorsPassword;

  constructor(
    firstName: string,
    lastName: string,
    cnp: string,
    positionHeld: string,
    phoneNumber: string,
    address: Address,
    bankAgency: BankAgency,
    customerAdvisorsPassword: CustomerAdvisorsPassword
  ) {
    this.id = 0; // Assume auto-generated
    this.firstName = firstName;
    this.lastName = lastName;
    this.cnp = cnp;
    this.positionHeld = positionHeld;
    this.phoneNumber = phoneNumber;
    this.bankAgency = bankAgency;
    this.address = address;
    this.customerAdvisorsPassword = customerAdvisorsPassword;
    this.client = [];
  }

  toString(): string {
    let result = `\nBancher ${this.id}\nFunctie: ${this.positionHeld}\nNume: ${this.firstName} ${this.lastName}\nCNP: ${this.cnp}\nTelefon: ${this.phoneNumber}`;
    result += `\nAdresa bancher: ${this.address}`;
    result += `\nAdresa agentie bancara: ${this.bankAgency.address}\n`;
    return result;
  }
}

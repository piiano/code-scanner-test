import { Address } from './Address';
import { CustomerAdvisors } from './CustomerAdvisors';

export interface BankAgency {
  no: number;
  id: string;
  phoneBankNumber: string;
  operatingMorningHours: string;
  operatingAfternoonHours: string;
  lunchBreak: string;
  customerAdvisors: CustomerAdvisors[];
  address: Address;
}

export class BankAgencyClass implements BankAgency {
  no: number;
  id: string;
  phoneBankNumber: string;
  operatingMorningHours: string;
  operatingAfternoonHours: string;
  lunchBreak: string;
  customerAdvisors: CustomerAdvisors[];
  address: Address;

  constructor(
    id: string,
    phoneBankNumber: string,
    operatingMorningHours: string,
    operatingAfternoonHours: string,
    lunchBreak: string,
    address: Address
  ) {
    this.no = 0; // Assume auto-generated
    this.id = id;
    this.phoneBankNumber = phoneBankNumber;
    this.operatingMorningHours = operatingMorningHours;
    this.operatingAfternoonHours = operatingAfternoonHours;
    this.lunchBreak = lunchBreak;
    this.address = address;
    this.customerAdvisors = [];
  }

  toString(): string {
    return `\nAgentie bancara \nId: ${this.id}\nTelefon: ${this.phoneBankNumber}\nProgram\nLuni-Vineri: ${this.operatingMorningHours} si ${this.operatingAfternoonHours}\nSambata si Duminica: inchis\nPauza de masa: ${this.lunchBreak}\nAdresa agentie bancara: ${this.address}\n`;
  }
}

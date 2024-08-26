import { BankAccount } from './BankAccount';

export interface Deposit {
  no: number;
  ron?: number;
  eur?: number;
  usd?: number;
  gbp?: number;
  bankAccount?: BankAccount | null;
}

export class DepositClass implements Deposit {
  no: number;
  ron?: number;
  eur?: number;
  usd?: number;
  gbp?: number;
  bankAccount?: BankAccount | null;

  constructor(
    no: number,
    ron?: number,
    eur?: number,
    usd?: number,
    gbp?: number,
    bankAccount?: BankAccount | null
  ) {
    this.no = no;
    this.ron = ron;
    this.eur = eur;
    this.usd = usd;
    this.gbp = gbp;
    this.bankAccount = bankAccount;
  }

  toString(): string {
    return `\nSold ${this.no}: ${this.ron ? 'RON: ' + this.ron + ', ' : ''}${this.eur ? 'EUR: ' + this.eur + ', ' : ''}${this.usd ? 'USD: ' + this.usd + ', ' : ''}${this.gbp ? 'GBP: ' + this.gbp : ''}`;
  }
}

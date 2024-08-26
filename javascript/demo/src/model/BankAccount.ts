import {Deposit} from './Deposit';

export interface BankAccount {
  id: number;
  username: string;
  password: number;
  deposit?: Deposit | null;
}

export class BankAccountClass implements BankAccount {
  id: number;
  username: string;
  password: number;
  deposit?: Deposit | null;

  constructor(username: string, password: number, deposit?: Deposit | null) {
    this.id = 0; // Assume auto-generated
    this.username = username;
    this.password = password;
    this.deposit = deposit;
  }

  toString(): string {
    const depositString = this.deposit ? `\nDeposit: ${this.deposit}` : '';
    return `Id cont: ${this.id}, nume de utilizator: ${this.username}, parola: ${this.password}${depositString}\n`;
  }
}

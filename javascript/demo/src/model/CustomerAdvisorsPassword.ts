
import { CustomerAdvisors } from './CustomerAdvisors';

export interface CustomerAdvisorsPassword {
  no: number;
  password: number;
  customerAdvisors: CustomerAdvisors | null;
}

export class CustomerAdvisorsPasswordClass implements CustomerAdvisorsPassword {
  no: number;
  password: number;
  customerAdvisors: CustomerAdvisors | null;

  constructor(no: number, password: number, customerAdvisors: CustomerAdvisors | null) {
    this.no = no;
    this.password = password;
    this.customerAdvisors = customerAdvisors;
  }
}

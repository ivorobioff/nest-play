import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Customer } from './Customer.model';

@Injectable()
export class CustomerService {

  private customers: Customer[] = [];
  
  save(customer: Customer) {
    customer.id = randomUUID();
    this.customers.push(customer);
  }

  findAll(): Customer[] {
    return this.customers;
  }

  find(id: string): Customer {
    return this.customers.find(customer => customer.id == id);
  }
}

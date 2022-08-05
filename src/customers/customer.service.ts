import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer, CustomerPayload } from './Customer.model';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer) 
    private customerRepository: Repository<Customer>
  ) { }
  
  create(payload: CustomerPayload): Promise<Customer> {
    let customer = Object.assign(new Customer(), payload);
    return this.customerRepository.save(customer);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  find(id: number): Promise<Customer> {
    return this.customerRepository.findOneBy({ id });
  }
}

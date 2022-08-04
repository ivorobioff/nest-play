import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './Customer.model';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer) 
    private customerRepository: Repository<Customer>
  ) { }
  
  save(customer: Customer) {

  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  find(id: string): Promise<Customer> {
    return this.customerRepository.findOneBy({ id });
  }
}

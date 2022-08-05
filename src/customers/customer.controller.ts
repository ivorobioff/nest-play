import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer, CustomerPayload } from './Customer.model';

@Controller("customers")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(":id")
  async find(@Param("id") id: number): Promise<Customer> {
    let customer = await this.customerService.find(id);

    if (!customer) {
      throw new NotFoundException(`Customer with ID '${id}' not found!`);
    }

    return customer;
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Post()
  create(@Body() payload: CustomerPayload): Promise<Customer> {
    return this.customerService.create(payload);
  }
}

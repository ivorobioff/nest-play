import { Body, Controller, Get, NotFoundException, Param, Post, UseInterceptors } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './Customer.model';

@Controller("customers")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(":id")
  async find(@Param("id") id: string): Promise<Customer> {
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
  create(@Body() data: Customer) {
    this.customerService.create(data);
  }
}

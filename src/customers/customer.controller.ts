import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './Customer.model';

@Controller("customers")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(":id")
  find(@Param("id") id: string): Customer {
    let customer = this.customerService.find(id);

    if (!customer) {
      throw new NotFoundException(`Customer with ID '${id}' not found!`);
    }

    return customer;
  }

  @Get()
  findAll(): Customer[] {
    return this.customerService.findAll();
  }

  @Post()
  save(@Body() data: Customer) {
    this.customerService.save(data);
  }
}

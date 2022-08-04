import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './Customer.model';

@Controller("customers")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(":id")
  find(@Param("id") id: string): Customer {
    return this.customerService.find(id);
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

import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService as ProductService } from './product.service';
import { Product } from './product.entity';
import { StaffGuard } from 'src/auth/staff.guard';
import { ProductPayload } from './product.payload';

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(":id")
  async find(@Param("id") id: number): Promise<Product> {
    let product = await this.productService.find(id);

    if (!product) {
      throw new NotFoundException(`Product[${id}] not found!`);
    }

    return product;
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @UseGuards(StaffGuard)
  @Post()
  create(@Body() payload: ProductPayload): Promise<Product> {
    return this.productService.create(payload);
  }
}

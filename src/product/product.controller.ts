import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService as ProductService } from './product.service';
import { Product as Product, ProductPayload } from './product.model';
import { StaffGuard } from 'src/auth/staff.guard';

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

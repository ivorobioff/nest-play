import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ProductService as ProductService } from './product.service';
import { Product as Product, ProductPayload } from './product.model';

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

  @Post()
  create(@Body() payload: ProductPayload): Promise<Product> {
    return this.productService.create(payload);
  }
}

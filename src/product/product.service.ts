import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product, ProductPayload } from './product.model';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) 
    private productRepository: Repository<Product>
  ) { }
  
  create(payload: ProductPayload): Promise<Product> {
    let product = Object.assign(new Product(), payload);
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  find(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }
}

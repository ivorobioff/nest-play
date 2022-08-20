import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/product/product.entity";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { Order } from "./order.entity";
import { OrderPayload } from "./order.payload";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)  private orderRepository: Repository<Order>,
        @InjectRepository(Product) private productRepository: Repository<Product>
    ) {}

    create(userId: number, payload: OrderPayload): Promise<Order> {

        let order = new Order();
        order.owner = new User(userId);
        order.products = payload.productIds.map(productId => new Product(productId));

        return this.orderRepository.save(order);
    }

    findAll(userId: number, withProducts = false): Promise<Order[]> {
        return null;
    }

    find(userId: number, orderId: number, withProducts = false): Promise<Order> {
        return null;
    }
}
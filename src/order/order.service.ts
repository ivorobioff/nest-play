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
        @InjectRepository(Order)  private orderRepository: Repository<Order>
    ) {}

    create(userId: number, payload: OrderPayload): Promise<Order> {
        let order = new Order();
        order.owner = new User(userId);
        order.products = payload.productIds.map(productId => new Product(productId));

        return this.orderRepository.save(order);
    }

    findAll(userId: number, includes: string[] = []): Promise<Order[]> {

        let relations = [];

        if (includes.includes("products")) {
            relations.push("products");
        }

        return this.orderRepository.find({
            where: { owner: new User(userId) },
            relations
        });
    }
}
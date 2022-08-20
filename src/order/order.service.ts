import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "./order.entity";
import { OrderPayload } from "./order.payload";

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order)  private orderRepository: Repository<Order>) {}

    create(payload: OrderPayload): Promise<Order> {
        
    } 
}
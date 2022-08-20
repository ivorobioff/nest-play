import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/product/product.entity";
import { OrderController } from "./order.controller";
import { Order } from "./order.entity";
import { OrderService } from "./order.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Order, Product])
    ],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule { }
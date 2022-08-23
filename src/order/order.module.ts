import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/product/product.entity";
import { OrderController } from "./order.controller";
import { Order } from "./order.entity";
import { OrderService } from "./order.service";
import { ProductAvailableConstraint } from "./product-available.constraint";

@Module({
    imports: [
        TypeOrmModule.forFeature([Order, Product])
    ],
    controllers: [OrderController],
    providers: [OrderService, ProductAvailableConstraint],
})
export class OrderModule { }
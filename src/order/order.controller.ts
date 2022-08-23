import { Body, Controller, Get, ParseArrayPipe, Post, Query, Request, UseGuards } from "@nestjs/common";
import { CustomerGuard } from "src/auth/customer.guard";
import { Order } from "./order.entity";
import { OrderPayload } from "./order.payload";
import { OrderService } from "./order.service";

@Controller("orders")
@UseGuards(CustomerGuard)
export class OrderController {

    constructor(private orderService: OrderService) { }

    @Post()
    create(@Request() request, @Body() payload: OrderPayload): Promise<Order> {
        return this.orderService.create(request.user, payload);
    }

    @Get()
    index(@Request() request, @Query("includes", new ParseArrayPipe({ optional: true })) includes: string[] = []): Promise<Order[]> {
        return this.orderService.findAll(request.user, includes);
    }
}
import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Post, Query, Request, UseGuards } from "@nestjs/common";
import { CustomerGuard } from "src/auth/customer.guard";
import { Order } from "./order.entity";
import { OrderPayload } from "./order.payload";
import { OrderService } from "./order.service";
import { SendOrderPayload } from "./send-order.payload";

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

    @Delete(":id")
    destroy(@Request() request, @Param("id") id: number): Promise<void> {
        return this.orderService.remove(request.user, id);
    }
    
    @Post("send")
    send(@Request() request, @Body() payload: SendOrderPayload): Promise<void> {
        return this.orderService.send(request.user, payload.ids);
    }
}
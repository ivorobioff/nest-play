import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/user.guard";
import { User } from "./entities/user.entity";
import { CustomerPayload } from "./payloads/customer.payload";
import { StaffPayload } from "./payloads/staff.payload";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {

    constructor(private userService : UserService) { }
    
    @Post("staff")
    async createStaff(@Body() payload: StaffPayload): Promise<void> {
        await this.userService.createStaff(payload);
    }

    @Post("customer")
    async createCustomer(@Body() payload: CustomerPayload): Promise<void> {
        await this.userService.createCustomer(payload);
    }

    @UseGuards(JwtAuthGuard)
    @Get("current")
    showCurrent(@Request() request): Promise<User> {
        return this.userService.get(request.user, true);
    }
}
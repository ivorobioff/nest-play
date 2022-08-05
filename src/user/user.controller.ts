import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { StaffGuard } from "src/auth/staff.guard";
import { UserGuard } from "src/auth/user.guard";
import { User } from "./entities/user.entity";
import { CustomerPayload } from "./payloads/customer.payload";
import { StaffPayload } from "./payloads/staff.payload";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {

    constructor(private userService : UserService) { }
    
    @UseGuards(UserGuard, StaffGuard)
    @Post("staff")
    async createStaff(@Body() payload: StaffPayload): Promise<void> {
        await this.userService.createStaff(payload);
    }

    @Post("customer")
    async createCustomer(@Body() payload: CustomerPayload): Promise<void> {
        await this.userService.createCustomer(payload);
    }

    @UseGuards(UserGuard)
    @Get("current")
    showCurrent(@Request() request): Promise<User> {
        return this.userService.get(request.user, true);
    }
}
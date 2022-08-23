import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { Open } from "src/auth/open.decorator";
import { StaffGuard } from "src/auth/staff.guard";
import { User } from "./entities/user.entity";
import { CustomerPayload } from "./payloads/customer.payload";
import { StaffPayload } from "./payloads/staff.payload";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {

    constructor(private userService : UserService) { }
    
    @UseGuards(StaffGuard)
    @Post("staff")
    createStaff(@Body() payload: StaffPayload): Promise<User> {
        return this.userService.createStaff(payload);
    }

    @Open()
    @Post("customer")
    async createCustomer(@Body() payload: CustomerPayload): Promise<User> {
        return this.userService.createCustomer(payload);
    }

    @Get("current")
    showCurrent(@Request() request): Promise<User> {
        return this.userService.get(request.user, true);
    }
}
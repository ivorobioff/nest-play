import { Body, Controller, Get, Post } from "@nestjs/common";
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

    @Get("current")
    showCurrent(): Promise<User> {
        return this.userService.getCurrent();
    }
}
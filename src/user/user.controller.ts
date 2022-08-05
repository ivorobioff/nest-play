import { Body, Controller, Get, Post } from "@nestjs/common";
import { CustomerPayload } from "./customer.model";
import { StaffPayload } from "./staff.mode";
import { User } from "./user.model";
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
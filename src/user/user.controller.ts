import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User, UserPayload } from "./user.model";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {

    constructor(private userService : UserService) { }
    
    @Post()
    create(@Body() payload: UserPayload): Promise<User> {
        return this.userService.create(payload);
    }

    @Get(":id")
    show(@Param() id: number): Promise<User> {
        return this.userService.get(id);
    }
}
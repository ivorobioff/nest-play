import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommonModule } from "src/common/common.module";
import { Customer } from "./customer.model";
import { Staff } from "./staff.mode";
import { UniqueUsernameConstraint } from "./unique-username.validator";
import { UserController } from "./user.controller";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Staff, Customer]),
        CommonModule
    ],
    providers: [UserService, UniqueUsernameConstraint],
    exports: [UserService],
    controllers: [UserController]
})
export class UserModule {}
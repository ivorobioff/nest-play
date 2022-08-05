import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommonModule } from "src/common/common.module";
import { Customer } from "./entities/customer.entity";
import { Staff } from "./entities/staff.entity";
import { User } from "./entities/user.entity";
import { UniqueUsernameConstraint } from "./unique-username.constraint";
import { UserController } from "./user.controller";
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
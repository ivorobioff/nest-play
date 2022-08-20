import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./entities/customer.entity";
import { Staff } from "./entities/staff.entity";
import { User } from "./entities/user.entity";
import { UniqueUsernameConstraint } from "./unique-username.constraint";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([User, Staff, Customer])
    ],
    providers: [UserService, UniqueUsernameConstraint],
    exports: [UserService],
    controllers: [UserController]
})
export class UserModule {}
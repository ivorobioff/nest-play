import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommonModule } from "src/common/common.module";
import { UserController } from "./user.controller";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        CommonModule
    ],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
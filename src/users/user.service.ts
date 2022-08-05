import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PasswordService } from "src/common/password.service";
import { Repository } from "typeorm";
import { User, UserPayload } from "./user.model";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private passwordService: PasswordService
    ) { }
    
    async create(payload: UserPayload): Promise<User> {
        let user = Object.assign(new User(), payload);

        user.password = await this.passwordService.encrypt(payload.password);

        return this.userRepository.save(user);
    }


    lookup(username: string): Promise<User> {
        return this.userRepository.findOneBy({ username });
    }
}
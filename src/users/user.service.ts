import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User, UserPayload } from "./user.model";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }
    
    async create(payload: UserPayload): Promise<User> {
        let user = Object.assign(new User(), payload);

        user.password = await hash(payload.password, 10);

        return this.userRepository.save(user);
    }


    lookup(username: string): Promise<User> {
        return this.userRepository.findOneBy({ username });
    }
}
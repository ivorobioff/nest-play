import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User, UserPayload } from "./user.model";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }
    
    create(payload: UserPayload): Promise<User> {
        let user = Object.assign(new User(), payload);
        return this.userRepository.save(user);
    }


    lookup(username: string): Promise<User> {
        return this.userRepository.findOneBy({ username });
    }
}
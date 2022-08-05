import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@ValidatorConstraint({ name: 'UniqueUsername', async: true })
@Injectable()
export class UniqueUsernameConstraint implements ValidatorConstraintInterface {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async validate(username: string, args?: ValidationArguments): Promise<boolean> {
        let user = await this.userRepository.findOneBy({ username });
        return !user;
    }

    defaultMessage(args?: ValidationArguments): string {
        return 'Username is already taken';
    }
}
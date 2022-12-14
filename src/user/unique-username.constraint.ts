import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueUsernameConstraint implements ValidatorConstraintInterface {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async validate(username: string, args?: ValidationArguments): Promise<boolean> {

        if (!username || typeof username !== 'string' || username.trim().length == 0) {
            return true;
        }

        return (await this.userRepository.countBy({ username })) === 0;
    }

    defaultMessage(args?: ValidationArguments): string {
        return `${args.property} is already taken`;
    }
}
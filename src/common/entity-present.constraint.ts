import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { DataSource } from "typeorm";

@ValidatorConstraint({ name: 'EntityPresent', async: true })
@Injectable()
export class EntityPresentConstraint implements ValidatorConstraintInterface {
    constructor(private dataSource: DataSource) { }

    async validate(id: number, args?: ValidationArguments): Promise<boolean> {

        let repository = this.dataSource.getRepository(args);

        return (await repository.countBy( { id })) > 0;
    }

    defaultMessage(args?: ValidationArguments): string {
        return `${args.property} is already taken`;
    }
}
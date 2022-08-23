import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { DataSource } from "typeorm";

@ValidatorConstraint({ async: true })
@Injectable()
export class EntityPresentConstraint implements ValidatorConstraintInterface {
    constructor(private dataSource: DataSource) { }

    async validate(id: number, args?: ValidationArguments): Promise<boolean> {

        let repository = this.dataSource.getRepository(args.constraints[0]);

        return (await repository.countBy( { id })) > 0;
    }

    defaultMessage(args?: ValidationArguments): string {
        const validationOptions: ValidationOptions = args.constraints[1];

        if (validationOptions.each) {
            return `${args.property} contains non-existent id(s)`
        }

        return `${args.property} not found`;
    }
}
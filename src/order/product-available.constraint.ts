import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Product } from "src/product/product.entity";
import { In, MoreThan, Repository } from "typeorm";

@ValidatorConstraint({ async: true })
@Injectable()
export class ProductAvailableConstraint implements ValidatorConstraintInterface {

    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>
    ) {}

    async validate(ids: number[], args?: ValidationArguments): Promise<boolean> {
        let total = await this.productRepository.countBy({ quantity: MoreThan(0), id: In(ids) });

        return total == ids.length;
    }

    defaultMessage(args?: ValidationArguments): string {
        return `${args.property} refers to unavailable product(s)`;
    }
}
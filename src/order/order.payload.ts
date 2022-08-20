import { ArrayNotEmpty, ArrayUnique, IsArray, IsNumber, Validate } from "class-validator";
import { EntityPresentConstraint } from "src/common/entity-present.constraint";
import { Product } from "src/product/product.entity";

export class OrderPayload {

    @Validate(EntityPresentConstraint, [Product], { each: true })
    @IsNumber({}, { each: true })
    @ArrayUnique()
    @ArrayNotEmpty()
    @IsArray()
    productIds: number[];
}
import { ArrayNotEmpty, ArrayUnique, IsArray, IsNumber, Validate } from "class-validator";
import { EntityPresent } from "src/common/entity-present.decorator";
import { Product } from "src/product/product.entity";
import { ProductAvailable } from "./product-available.decorator";

export class OrderPayload {

    @ProductAvailable()
    @EntityPresent(Product, { each: true })
    @IsNumber({}, { each: true })
    @ArrayUnique()
    @ArrayNotEmpty()
    @IsArray()
    productIds: number[];
}
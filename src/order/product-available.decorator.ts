import { registerDecorator, ValidateByOptions, ValidationOptions } from "class-validator";
import { ProductAvailableConstraint } from "./product-available.constraint";

export function ProductAvailable() {
    return function (source: object, propertyName: string) {
        return registerDecorator({
            target: source.constructor,
            propertyName: propertyName,
            constraints: [],
            validator: ProductAvailableConstraint,
        });
    }
}
import { registerDecorator, ValidationOptions } from "class-validator";
import { EntityTarget, ObjectLiteral } from "typeorm";
import { EntityPresentConstraint } from "./entity-present.constraint";

export function EntityPresent(target: EntityTarget<ObjectLiteral>, validationOptions: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [target, validationOptions],
            validator: EntityPresentConstraint,
        });
    };
}
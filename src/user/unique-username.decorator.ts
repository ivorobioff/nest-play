import { registerDecorator, ValidationOptions } from "class-validator";
import { UniqueUsernameConstraint } from "./unique-username.constraint";

export function UniqueUsername(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UniqueUsernameConstraint,
        });
    };
}
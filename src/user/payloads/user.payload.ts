import { IsAlphanumeric, IsString, MinLength, Validate } from "class-validator";
import { UniqueUsernameConstraint } from "../unique-username.constraint";

export class UserPayload {

    @Validate(UniqueUsernameConstraint)
    @IsAlphanumeric()
    @MinLength(3)
    @IsString()
    username: string;

    @MinLength(6)
    @IsString()
    password: string;
}
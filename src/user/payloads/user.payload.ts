import { IsAlphanumeric, IsString, MinLength, Validate } from "class-validator";
import { UniqueUsernameConstraint } from "../unique-username.constraint";

export class UserPayload {

    @IsString()
    @IsAlphanumeric()
    @MinLength(3)
    @Validate(UniqueUsernameConstraint)
    username: string;

    @IsString()
    @MinLength(6)
    password: string;
}
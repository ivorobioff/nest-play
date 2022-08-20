import { IsAlphanumeric, IsString, MinLength } from "class-validator";
import { UniqueUsername } from "../unique-username.decorator";

export class UserPayload {

    @UniqueUsername()
    @IsAlphanumeric()
    @MinLength(3)
    @IsString()
    username: string;

    @MinLength(6)
    @IsString()
    password: string;
}
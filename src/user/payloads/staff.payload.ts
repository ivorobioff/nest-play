import { UserPayload } from "./user.payload";
import { IsAlpha, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class StaffPayload extends UserPayload {
    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
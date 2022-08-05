import { UserPayload } from "./user.payload";
import { IsAlpha, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class StaffPayload extends UserPayload {
    @IsAlpha()
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsAlpha()
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;
}
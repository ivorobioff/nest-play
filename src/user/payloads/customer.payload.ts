import { UserPayload } from "./user.payload";
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxDate } from "class-validator";
import { Gender } from "../enums";

function year18(): Date {
    let now = new Date();

    now.setFullYear(now.getFullYear() - 18);

    return now;
}

export class CustomerPayload extends UserPayload {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('RO')
    phone: string;
    
    @IsDate()
    @MaxDate(year18())
    dob: Date;

    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;
} 
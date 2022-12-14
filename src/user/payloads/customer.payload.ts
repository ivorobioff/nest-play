import { UserPayload } from "./user.payload";
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxDate } from "class-validator";
import { Gender } from "../enums";
import { Type } from "class-transformer";

function year18(): Date {
    let now = new Date();

    now.setFullYear(now.getFullYear() - 18);

    return now;
}

export class CustomerPayload extends UserPayload {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('RO')
    phone: string;
    
    @MaxDate(year18())
    @Type(() => Date)
    @IsDate()
    dob: Date;

    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;
} 
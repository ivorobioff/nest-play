import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxDate } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserPayload } from "./user.model";

export enum Gender {
    Male,
    Female
}

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column()
    phone: string;
    
    @Column()
    dob: Date;

    @Column({ nullable: true})
    gender?: Gender
}


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
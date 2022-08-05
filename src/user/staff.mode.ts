import { IsAlpha, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserPayload } from "./user.model";

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;
}

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
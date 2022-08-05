import { Exclude } from "class-transformer";
import { IsEmail, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Exclude()
    @Column({ default: true })
    isActive: boolean;
}

export class CustomerPayload {

    @IsString()
    name: string;

    @IsEmail()
    email: string;
}
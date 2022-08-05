import { Exclude } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    createdAt: Date;
    
    staffId: number;
    customerId: number;
}


export class UserPayload {

    @IsString()
    username: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    name: string;

    @IsEmail()
    email: string;
}
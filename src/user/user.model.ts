import { Exclude } from "class-transformer";
import { IsAlphanumeric, IsString, MinLength } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.model";
import { Staff } from "./staff.mode";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @OneToOne(() => Staff)
    @JoinColumn()
    staff: Staff;

    @OneToOne(() => Customer)
    @JoinColumn()
    customer: Customer;
}


export class UserPayload {

    @IsString()
    @IsAlphanumeric()
    @MinLength(3)
    username: string;

    @IsString()
    @MinLength(6)
    password: string;
}
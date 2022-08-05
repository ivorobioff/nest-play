import { Exclude } from "class-transformer";
import { IsAlphanumeric, IsString, MinLength } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
    @JoinTable()
    @Column({ nullable: true })
    staff: Staff;

    @OneToOne(() => Customer)
    @JoinTable()
    @Column({ nullable: true })
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
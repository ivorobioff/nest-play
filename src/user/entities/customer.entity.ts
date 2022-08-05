import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "./../enums";

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

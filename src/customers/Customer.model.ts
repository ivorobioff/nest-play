import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

    @Exclude({ toPlainOnly: true })
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Exclude()
    @Column({ default: true })
    isActive: boolean;
}
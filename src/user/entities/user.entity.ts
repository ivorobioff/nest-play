import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Customer } from "./customer.entity";
import { Staff } from "./staff.entity";

@Entity()
export class User {

    constructor(id?: number) {
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
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
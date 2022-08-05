import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Customer } from "./customer.entity";
import { Staff } from "./staff.entity";

@Entity()
export class User {
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

    @Exclude()
    @RelationId('staff')
    staffId: number;

    get isStaff(): boolean {
        return !!this.staffId;
    }

    get isCustomer(): boolean {
        return !!this.customerId;
    }

    @OneToOne(() => Customer)
    @JoinColumn()
    customer: Customer;
    
    @Exclude()
    @RelationId('customer')
    customerId: number;
}
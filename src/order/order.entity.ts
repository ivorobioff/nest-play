import { Exclude } from "class-transformer";
import { Product } from "src/product/product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Product)
    products: Product[];

    @CreateDateColumn()
    createdAt: Date;
    
    @Column({ default: false })
    sent: boolean;

    @Exclude()
    @ManyToOne(() => User)
    owner: User
}
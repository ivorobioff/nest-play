import { Exclude } from "class-transformer";
import { IsDecimal, IsInt, IsPositive, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Exclude()
    @Column({ default: true })
    available: boolean;
}

export class ProductPayload {

    @IsString()
    name: string;

    @IsPositive()
    @IsInt()
    quantity: number;
    
    @IsPositive()
    @IsDecimal({ decimal_digits: 2})
    price: number;
}
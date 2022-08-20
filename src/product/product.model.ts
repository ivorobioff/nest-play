import { Exclude } from "class-transformer";
import { IsInt, IsNumber, IsPositive, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;

    @Exclude()
    @Column({ default: true })
    available: boolean;
}

export class ProductPayload {

    @IsString()
    name: string;

    @IsPositive()
    @IsInt()
    @IsNumber()
    quantity: number;
    
    @IsPositive()
    @IsNumber({ maxDecimalPlaces: 2})
    price: number;
}
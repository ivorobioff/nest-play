import { Exclude } from "class-transformer";
import { IsPositive, IsString } from "class-validator";
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
    quantity: number;
}
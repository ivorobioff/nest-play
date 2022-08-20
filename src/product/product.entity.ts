import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    constructor(id?: number) {
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;
}
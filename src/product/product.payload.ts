import { IsInt, IsNumber, IsPositive, IsString } from "class-validator";

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
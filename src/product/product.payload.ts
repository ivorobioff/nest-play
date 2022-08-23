import { IsInt, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class ProductPayload {

    @IsString()
    name: string;

    @Min(0)
    @IsInt()
    @IsNumber()
    quantity: number;
    
    @IsPositive()
    @IsNumber({ maxDecimalPlaces: 2})
    price: number;
}
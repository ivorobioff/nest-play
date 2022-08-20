import { IsString } from "class-validator";

export class OrderPayload {

    @IsString({ each: true })
    productIds: string[];
}
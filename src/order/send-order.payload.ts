import { ArrayNotEmpty, ArrayUnique, IsArray, IsInt } from "class-validator";

export class SendOrderPayload {
    @ArrayUnique()
    @IsInt({ each: true })
    @ArrayNotEmpty()
    @IsArray()
    ids: number[];
}
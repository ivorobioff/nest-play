import { IsNotEmpty, IsString } from "class-validator";

export class CredentialsPayload {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
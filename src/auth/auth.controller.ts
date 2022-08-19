import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthResult } from './auth.result';
import { AuthService } from './auth.service';
import { CredentialsPayload } from './credentials.payload';
import { Open } from './open.decorator';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    
    @Open()
    @Post("login")
    async login(@Body() payload: CredentialsPayload): Promise<AuthResult> {
        let result = await this.authService.login(payload);

        if (!result) {
            throw new UnauthorizedException();
        }

        return result;
    }
}

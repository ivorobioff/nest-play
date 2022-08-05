import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from 'src/common/password.service';
import { UserService } from 'src/user/user.service';
import { AuthResult } from './auth.result';
import { CredentialsPayload } from './credentials.payload';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService, 
        private passwordService: PasswordService,
        private jwtService: JwtService
    ) {}

    async login(payload: CredentialsPayload): Promise<AuthResult> {
        let user = await this.userService.lookup(payload.username);

        if (!user) {
            return null;
        }

        let valid = await this.passwordService.verify(user.password, payload.password);

        if (!valid) {
            return null;
        }

        let token = this.jwtService.sign({ username: user.username, sub: user.id });

        return { token };
    }
}

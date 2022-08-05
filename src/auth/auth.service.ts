import { Injectable } from '@nestjs/common';
import { PasswordService } from 'src/common/password.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService, 
        private passwordService: PasswordService
    ) {}

    async login(username: string, password: string): Promise<User> {
        let user = await this.userService.lookup(username);

        if (!user) {
            return null;
        }

        if (!this.passwordService.verify(user.password, password)) {
            return null;
        }

        return user;
    }
}

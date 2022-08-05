import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
    encrypt(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    verify(source: string, target: string): Promise<boolean> {
        return bcrypt.compare(target, source);
    }
}
import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class UserGuard extends AuthGuard('jwt') {
    constructor(private readonly reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {

        const open = this.reflector.get<boolean>(
            'open',
            context.getHandler()
        );

        if (open) {
            return true;
        }

        return super.canActivate(context);
    }
}
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class StaffGuard implements CanActivate {

    constructor(private userService: UserService) {  }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        let userId = context.switchToHttp().getRequest().user;

        if (!userId) {
            return false;
        }
        
        return this.userService.isStaff(userId);
    }
}
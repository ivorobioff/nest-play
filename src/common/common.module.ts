import { Global, Module } from "@nestjs/common";
import { EntityPresentConstraint } from "./entity-present.constraint";
import { PasswordService } from "./password.service";

@Global()
@Module({
    providers: [PasswordService, EntityPresentConstraint],
    exports: [PasswordService]
})
export class CommonModule {}
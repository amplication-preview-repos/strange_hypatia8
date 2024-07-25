import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClickModuleBase } from "./base/click.module.base";
import { ClickService } from "./click.service";
import { ClickController } from "./click.controller";
import { ClickResolver } from "./click.resolver";

@Module({
  imports: [ClickModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClickController],
  providers: [ClickService, ClickResolver],
  exports: [ClickService],
})
export class ClickModule {}

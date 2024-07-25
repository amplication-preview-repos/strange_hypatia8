import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameSessionModuleBase } from "./base/gameSession.module.base";
import { GameSessionService } from "./gameSession.service";
import { GameSessionController } from "./gameSession.controller";
import { GameSessionResolver } from "./gameSession.resolver";

@Module({
  imports: [GameSessionModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameSessionController],
  providers: [GameSessionService, GameSessionResolver],
  exports: [GameSessionService],
})
export class GameSessionModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameSessionService } from "./gameSession.service";
import { GameSessionControllerBase } from "./base/gameSession.controller.base";

@swagger.ApiTags("gameSessions")
@common.Controller("gameSessions")
export class GameSessionController extends GameSessionControllerBase {
  constructor(
    protected readonly service: GameSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

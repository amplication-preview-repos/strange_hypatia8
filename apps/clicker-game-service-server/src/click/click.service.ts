import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClickServiceBase } from "./base/click.service.base";

@Injectable()
export class ClickService extends ClickServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

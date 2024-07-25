/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Click as PrismaClick,
  User as PrismaUser,
} from "@prisma/client";

export class ClickServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ClickCountArgs, "select">): Promise<number> {
    return this.prisma.click.count(args);
  }

  async clicks(args: Prisma.ClickFindManyArgs): Promise<PrismaClick[]> {
    return this.prisma.click.findMany(args);
  }
  async click(args: Prisma.ClickFindUniqueArgs): Promise<PrismaClick | null> {
    return this.prisma.click.findUnique(args);
  }
  async createClick(args: Prisma.ClickCreateArgs): Promise<PrismaClick> {
    return this.prisma.click.create(args);
  }
  async updateClick(args: Prisma.ClickUpdateArgs): Promise<PrismaClick> {
    return this.prisma.click.update(args);
  }
  async deleteClick(args: Prisma.ClickDeleteArgs): Promise<PrismaClick> {
    return this.prisma.click.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.click
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
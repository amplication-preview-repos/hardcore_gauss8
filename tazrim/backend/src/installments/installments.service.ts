import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstallmentsServiceBase } from "./base/installments.service.base";

@Injectable()
export class InstallmentsService extends InstallmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

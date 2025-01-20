import { Module } from "@nestjs/common";
import { InstallmentsModuleBase } from "./base/installments.module.base";
import { InstallmentsService } from "./installments.service";
import { InstallmentsController } from "./installments.controller";
import { InstallmentsResolver } from "./installments.resolver";

@Module({
  imports: [InstallmentsModuleBase],
  controllers: [InstallmentsController],
  providers: [InstallmentsService, InstallmentsResolver],
  exports: [InstallmentsService],
})
export class InstallmentsModule {}

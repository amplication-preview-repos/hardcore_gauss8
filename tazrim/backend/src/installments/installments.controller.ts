import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstallmentsService } from "./installments.service";
import { InstallmentsControllerBase } from "./base/installments.controller.base";

@swagger.ApiTags("installments")
@common.Controller("installments")
export class InstallmentsController extends InstallmentsControllerBase {
  constructor(protected readonly service: InstallmentsService) {
    super(service);
  }
}

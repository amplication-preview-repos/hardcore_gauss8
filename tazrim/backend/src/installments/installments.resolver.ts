import * as graphql from "@nestjs/graphql";
import { InstallmentsResolverBase } from "./base/installments.resolver.base";
import { Installments } from "./base/Installments";
import { InstallmentsService } from "./installments.service";

@graphql.Resolver(() => Installments)
export class InstallmentsResolver extends InstallmentsResolverBase {
  constructor(protected readonly service: InstallmentsService) {
    super(service);
  }
}

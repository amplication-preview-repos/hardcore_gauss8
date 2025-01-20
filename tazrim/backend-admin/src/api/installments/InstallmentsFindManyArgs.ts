import { InstallmentsWhereInput } from "./InstallmentsWhereInput";
import { InstallmentsOrderByInput } from "./InstallmentsOrderByInput";

export type InstallmentsFindManyArgs = {
  where?: InstallmentsWhereInput;
  orderBy?: Array<InstallmentsOrderByInput>;
  skip?: number;
  take?: number;
};

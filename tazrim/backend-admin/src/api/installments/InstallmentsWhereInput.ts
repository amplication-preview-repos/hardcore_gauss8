import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type InstallmentsWhereInput = {
  id?: StringFilter;
  paymentNumber?: IntFilter;
  totalAmount?: FloatFilter;
  totalPayments?: IntFilter;
};

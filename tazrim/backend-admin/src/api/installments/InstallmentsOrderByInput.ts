import { SortOrder } from "../../util/SortOrder";

export type InstallmentsOrderByInput = {
  id?: SortOrder;
  paymentNumber?: SortOrder;
  totalAmount?: SortOrder;
  totalPayments?: SortOrder;
};

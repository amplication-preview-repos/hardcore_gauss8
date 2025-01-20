import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  cardId?: SortOrder;
  category?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  typeField?: SortOrder;
};

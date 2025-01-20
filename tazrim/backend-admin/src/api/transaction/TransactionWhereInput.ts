import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  cardId?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notes?: StringNullableFilter;
  typeField?: StringNullableFilter;
};

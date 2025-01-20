export type TransactionUpdateInput = {
  amount?: number | null;
  cardId?: string | null;
  category?: Array<"Option1">;
  date?: Date | null;
  name?: string | null;
  notes?: string | null;
  typeField?: string | null;
};

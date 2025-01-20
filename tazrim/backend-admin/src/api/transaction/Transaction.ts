export type Transaction = {
  amount: number | null;
  cardId: string | null;
  category?: Array<"Option1">;
  date: Date | null;
  id: string;
  name: string | null;
  notes: string | null;
  typeField: string | null;
};

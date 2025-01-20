import { Installments as TInstallments } from "../api/installments/Installments";

export const INSTALLMENTS_TITLE_FIELD = "id";

export const InstallmentsTitle = (record: TInstallments): string => {
  return record.id?.toString() || String(record.id);
};

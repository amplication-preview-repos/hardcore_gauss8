import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const InstallmentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="payment_number" source="paymentNumber" />
        <TextField label="total_amount" source="totalAmount" />
        <TextField label="total_payments" source="totalPayments" />
      </SimpleShowLayout>
    </Show>
  );
};

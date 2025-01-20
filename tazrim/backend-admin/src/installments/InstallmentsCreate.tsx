import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const InstallmentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="payment_number" source="paymentNumber" />
        <NumberInput label="total_amount" source="totalAmount" />
        <NumberInput step={1} label="total_payments" source="totalPayments" />
      </SimpleForm>
    </Create>
  );
};

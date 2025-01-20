import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const InstallmentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="payment_number" source="paymentNumber" />
        <NumberInput label="total_amount" source="totalAmount" />
        <NumberInput step={1} label="total_payments" source="totalPayments" />
      </SimpleForm>
    </Edit>
  );
};

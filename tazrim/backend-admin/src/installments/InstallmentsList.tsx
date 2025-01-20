import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InstallmentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"InstallmentsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <TextField label="payment_number" source="paymentNumber" />
        <TextField label="total_amount" source="totalAmount" />
        <TextField label="total_payments" source="totalPayments" />{" "}
      </Datagrid>
    </List>
  );
};

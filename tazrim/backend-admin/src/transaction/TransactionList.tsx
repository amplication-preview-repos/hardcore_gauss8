import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <TextField label="card_id" source="cardId" />
        <TextField label="category" source="category" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="notes" source="notes" />
        <TextField label="type" source="typeField" />{" "}
      </Datagrid>
    </List>
  );
};

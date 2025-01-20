import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <TextField label="card_id" source="cardId" />
        <TextField label="category" source="category" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="notes" source="notes" />
        <TextField label="type" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};

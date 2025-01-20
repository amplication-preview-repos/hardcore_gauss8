import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="card_id" source="cardId" />
        <SelectArrayInput
          label="category"
          source="category"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="date" source="date" />
        <TextInput label="name" source="name" />
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};

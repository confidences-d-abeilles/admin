import React from 'react';
import {
  List, Datagrid, EmailField, ReferenceField, DateField, TextField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <EmailField source="email" />
      <ReferenceField source="delivery_address_id" reference="addresses">
        <TextField source="line1" />
      </ReferenceField>
      <ReferenceField source="billing_address_id" reference="addresses">
        <TextField source="line1" />
      </ReferenceField>
      <DateField source="updated_at" />
      <DateField source="created_at" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

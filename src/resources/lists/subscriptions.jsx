import React from 'react';
import {
  List, Datagrid, ReferenceField, TextField, DateField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <ReferenceField source="user_id" reference="users" link="show"><TextField source="email" /></ReferenceField>
      <ReferenceField source="product_id" reference="products" link="show"><TextField source="name" /></ReferenceField>
      <DateField source="start_date" />
      <DateField source="expiration_date" />
    </Datagrid>
  </List>
);

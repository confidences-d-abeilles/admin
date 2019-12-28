import React from 'react';
import {
  List, TextField, Datagrid, ReferenceField, NumberField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <ReferenceField source="user_id" reference="users"><TextField source="email" /></ReferenceField>
      <NumberField source="price" />
    </Datagrid>
  </List>
);

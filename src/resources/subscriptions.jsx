import React from 'react';
import {
  List, Datagrid, ReferenceField, DateField, TextField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="user_id" reference="users"><TextField source="email" /></ReferenceField>
      <DateField source="updated_at" />
      <DateField source="created_at" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

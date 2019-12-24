import React from 'react';
import {
  Datagrid, TextField, DateField, List,
} from 'react-admin';


export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="line1" />
      <TextField source="line2" />
      <TextField source="city" />
      <DateField source="updated_at" />
      <DateField source="created_at" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

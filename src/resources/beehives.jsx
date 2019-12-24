import React from 'react';
import {
  List, Datagrid, NumberField, DateField, TextField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="food" />
      <NumberField source="supers" />
      <NumberField source="weight" />
      <TextField source="tempIn" />
      <TextField source="name" />
      <DateField source="updated_at" />
      <NumberField source="occupation" />
      <TextField source="tempOut" />
      <DateField source="created_at" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

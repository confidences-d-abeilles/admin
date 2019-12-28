import React from 'react';
import {
  List, Datagrid, NumberField, TextField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <NumberField source="rating" />
      <NumberField source="occupation" />
      <NumberField source="weight" />
      <NumberField source="supers" />
      <TextField source="food" />
      <TextField source="tempIn" />
      <TextField source="tempOut" />
    </Datagrid>
  </List>
);

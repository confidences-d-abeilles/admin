import React from 'react';
import {
  List, TextField, NumberField, Datagrid,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <NumberField source="price" />
    </Datagrid>
  </List>
);

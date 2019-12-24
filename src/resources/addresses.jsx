import React from 'react';
import {
  Datagrid, TextField, List, NumberField,
} from 'react-admin';


export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="firstname" />
      <TextField source="name" />
      <TextField source="line1" />
      <TextField source="line2" />
      <NumberField source="zipcode" />
      <TextField source="city" />
      <TextField source="country" />
      <NumberField source="phone" />
    </Datagrid>
  </List>
);

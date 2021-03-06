import React from 'react';
import {
  Datagrid, TextField, List, NumberField,
} from 'react-admin';


export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="firstname" />
      <TextField source="name" />
      <TextField source="line1" />
      <NumberField source="zipcode" />
      <TextField source="city" />
      <TextField source="country" />
    </Datagrid>
  </List>
);

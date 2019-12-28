import React from 'react';
import {
  List, TextField, Datagrid,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="job" />
      <TextField source="siret" />
      <TextField source="website" />
      <TextField source="namespace" />
    </Datagrid>
  </List>
);

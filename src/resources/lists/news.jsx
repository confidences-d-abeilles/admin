import React from 'react';
import {
  List, Datagrid, ReferenceField, TextField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <ReferenceField source="beehive_id" reference="beehives"><TextField source="name" /></ReferenceField>
      <TextField source="title" />
    </Datagrid>
  </List>
);

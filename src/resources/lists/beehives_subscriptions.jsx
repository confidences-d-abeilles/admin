import React from 'react';
import {
  List, Datagrid, ReferenceField, TextField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="subscription_id" reference="subscriptions"><TextField source="id" /></ReferenceField>
      <ReferenceField source="beehive_id" reference="beehives"><TextField source="id" /></ReferenceField>
    </Datagrid>
  </List>
);

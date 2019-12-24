import React from 'react';
import {
  List, Datagrid, ReferenceField, TextField, ReferenceManyField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="user_id" reference="users"><TextField source="email" /></ReferenceField>
      <ReferenceManyField source="beehives_subscriptions" reference="beehives_subscriptions">
        <Datagrid>
          <ReferenceField source="beehive_id" reference="beehives"><TextField source="name" /></ReferenceField>
        </Datagrid>
      </ReferenceManyField>
    </Datagrid>
  </List>
);

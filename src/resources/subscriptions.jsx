import React from 'react';
import {
  List, Datagrid, ReferenceField, TextField, ReferenceArrayField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="user_id" reference="users"><TextField source="email" /></ReferenceField>
      <ReferenceArrayField source="beehives_subscriptions" reference="beehives_subscriptions">
        <Datagrid>
          <ReferenceArrayField source="beehive_id" reference="beehives">
            <Datagrid>
              <TextField source="name" />
            </Datagrid>
          </ReferenceArrayField>
        </Datagrid>
      </ReferenceArrayField>
    </Datagrid>
  </List>
);

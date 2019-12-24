import React from 'react';
import {
  List, Datagrid, EmailField, ReferenceField, ReferenceManyField, TextField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <EmailField source="email" />
      <ReferenceField source="delivery_address_id" reference="addresses">
        <TextField source="line1" />
      </ReferenceField>
      <ReferenceField source="billing_address_id" reference="addresses">
        <TextField source="line1" />
      </ReferenceField>
      <ReferenceManyField reference="subscriptions" target="user_id" label="Abonnements">
        <Datagrid>
          <ReferenceField source="id" reference="subscriptions" label="">
            <TextField source="id" />
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
    </Datagrid>
  </List>
);

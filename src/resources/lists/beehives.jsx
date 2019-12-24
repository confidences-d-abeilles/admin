import React from 'react';
import {
  List, Datagrid, NumberField, TextField, ReferenceManyField, ReferenceField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceManyField target="beehive_id" reference="beehives_subscriptions" label="Parrainages">
        <Datagrid>
          <ReferenceField source="subscription_id" reference="subscriptions">
            <TextField source="id" />
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
      <NumberField source="occupation" />
      <NumberField source="weight" />
      <NumberField source="supers" />
      <TextField source="food" />
      <TextField source="tempIn" />
      <TextField source="tempOut" />
    </Datagrid>
  </List>
);

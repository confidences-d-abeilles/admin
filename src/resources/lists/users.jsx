import React from 'react';
import {
  List, Datagrid, EmailField, TextField, ReferenceField,
} from 'react-admin';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="firstname" />
      <TextField source="name" />
      <ReferenceField source="company_id" reference="companies" label="Entreprise" link="show">
        <TextField source="name" />
      </ReferenceField>
      <EmailField source="email" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);

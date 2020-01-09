import React from 'react';
import {
  List, Datagrid, EmailField, TextField, ReferenceField, Filter, TextInput,
} from 'react-admin';

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Prénom" source="firstname" />
    <TextInput label="Nom" source="name" />
    <TextInput label="Email" source="email" />
    <TextInput label="Téléphone" source="phone" />
  </Filter>
);

export default (props) => (
  <List filters={<UserFilter />} {...props}>
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

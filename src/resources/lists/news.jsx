import React from 'react';
import {
  List, Datagrid, ReferenceField, TextField, DateField, TextInput, Filter,
} from 'react-admin';

const NewsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export default (props) => (
  <List filters={<NewsFilter />} {...props}>
    <Datagrid rowClick="show">
      <DateField source="date" />
      <TextField source="title" />
      <ReferenceField source="beehive_id" reference="beehives"><TextField source="name" /></ReferenceField>
    </Datagrid>
  </List>
);

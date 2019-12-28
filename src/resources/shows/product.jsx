import React from 'react';
import {
  Show, SimpleShowLayout, TextField, NumberField,
} from 'react-admin';

const Title = ({ record }) => <span>{record.name}</span>;

export default (props) => (
  <Show title={<Title />} {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <NumberField source="price" />
    </SimpleShowLayout>
  </Show>
);

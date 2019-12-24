import React from 'react';
import {
  Show, SimpleShowLayout, TextField, NumberField, DateField,
} from 'react-admin';

export default (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="line2" />
      <TextField source="phone" />
      <TextField source="country" />
      <NumberField source="zipcode" />
      <TextField source="gender" />
      <TextField source="name" />
      <TextField source="company" />
      <DateField source="updated_at" />
      <TextField source="city" />
      <TextField source="line1" />
      <DateField source="created_at" />
      <TextField source="firstname" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);

import React from 'react';
import {
  Show, SimpleShowLayout, TextField, NumberField,
} from 'react-admin';

const Title = ({ record }) => <span>{`${record.firstname} ${record.name}`}</span>;

export default (props) => (
  <Show title={<Title />} {...props}>
    <SimpleShowLayout>
      <TextField source="gender" />
      <TextField source="firstname" />
      <TextField source="name" />
      <TextField source="line1" />
      <TextField source="line2" />
      <NumberField source="zipcode" />
      <TextField source="city" />
      <TextField source="country" />
      <TextField source="phone" />
      <TextField source="company" />
    </SimpleShowLayout>
  </Show>
);

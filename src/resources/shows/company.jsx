import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

const Title = ({ record }) => <span>{record.name}</span>;

export default (props) => (
  <Show title={<Title />} {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="job" />
      <TextField source="siret" />
      <TextField source="website" />
      <TextField source="namespace" />
      <TextField source="involvement" />
      <TextField source="description" />
      <TextField source="link1_name" />
      <TextField source="link1_url" />
      <TextField source="link2_url" />
      <TextField source="link2_name" />
    </SimpleShowLayout>
  </Show>
);

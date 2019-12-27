import React from 'react';
import {
  Show, SimpleShowLayout, TextField, ReferenceField, ImageField,
} from 'react-admin';

export default (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField source="beehive_id" reference="beehives" label="Ruche"><TextField source="name" /></ReferenceField>
      <TextField source="title" label="Titre" />
      <TextField source="content" label="Contenu" />
      <ReferenceField source="image_id" reference="files"><ImageField source="filename" title="Picture" /></ReferenceField>
    </SimpleShowLayout>
  </Show>
);

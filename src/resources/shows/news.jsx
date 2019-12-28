import React from 'react';
import {
  Show, SimpleShowLayout, TextField, ReferenceField, ImageField, EditButton, TopToolbar, RichTextField,
} from 'react-admin';

const Title = ({ record }) => <span>{record.title}</span>;

const PostShowActions = ({ basePath, data }) => (
  <TopToolbar>
    <EditButton basePath={basePath} record={data} />
  </TopToolbar>
);

export default (props) => (
  <Show actions={<PostShowActions />} title={<Title />} {...props}>
    <SimpleShowLayout>
      <ReferenceField source="beehive_id" reference="beehives" label="Ruche" link="show"><TextField source="name" /></ReferenceField>
      <TextField source="title" label="Titre" />
      <RichTextField source="content" label="Contenu" />
      <ReferenceField source="image_id" reference="files"><ImageField source="filename" title="Picture" /></ReferenceField>
    </SimpleShowLayout>
  </Show>
);

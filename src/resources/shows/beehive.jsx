import React from 'react';
import {
  Show, TabbedShowLayout, NumberField, TextField,
  ReferenceManyField, ReferenceField, Datagrid, EditButton, Tab,
} from 'react-admin';

const Title = ({ record }) => <span>{`${record.name} ${record.identifier}`}</span>;


export default (props) => (
  <Show title={<Title />} {...props}>
    <TabbedShowLayout>
      <Tab label="Public">
        <TextField source="description" />
        <NumberField source="rating" />
        <ReferenceField source="image_id" reference="images"><TextField source="id" /></ReferenceField>
      </Tab>
      <Tab label="News">
        <ReferenceManyField reference="news" target="beehive_id" label="News">
          <Datagrid>
            <TextField source="title" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Technique">
        <TextField source="identifier" />
        <TextField source="notes" />
        <TextField source="weight" />
        <NumberField source="occupation" />
        <TextField source="food" />
        <NumberField source="supers" />
        <TextField source="tempIn" />
        <TextField source="tempOut" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);

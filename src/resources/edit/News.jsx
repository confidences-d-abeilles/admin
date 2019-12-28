import React from 'react';
import {
  Edit, SimpleForm, TextInput, ReferenceInput, SelectInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const Title = ({ record }) => <span>{record.title}</span>;

export default (props) => (
  <Edit title={<Title />} {...props}>
    <SimpleForm>
      <ReferenceInput label="Ruche" source="beehive_id" reference="beehives">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <RichTextInput source="content" />
    </SimpleForm>
  </Edit>
);

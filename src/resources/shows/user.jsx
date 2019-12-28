import React from 'react';
import {
  Show, SimpleShowLayout, EmailField, TextField, ReferenceField, ReferenceManyField, Datagrid,
} from 'react-admin';

const Title = ({ record }) => <span>{`${record.firstname} ${record.name}`}</span>;

export default (props) => (
  <Show title={<Title />} {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="firstname" />
      <TextField source="gender" />
      <EmailField source="email" />
      <TextField source="phone" />
      <ReferenceField source="delivery_address_id" reference="addresses" link="show"><TextField source="city" /></ReferenceField>
      <ReferenceField source="billing_address_id" reference="addresses" link="show"><TextField source="city" /></ReferenceField>
      <ReferenceField source="company_id" reference="companies" link="show" label="Entreprise"><TextField source="name" /></ReferenceField>
      <ReferenceManyField reference="subscriptions" target="user_id" label="Abonnements">
        <Datagrid>
          <ReferenceField source="id" reference="subscriptions" label="" link="show">
            <TextField source="id" />
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

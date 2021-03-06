import React from 'react';
import {
  Show, SimpleShowLayout, ReferenceField, TextField, DateField, ReferenceManyField, Datagrid,
} from 'react-admin';

const Title = () => <span>Détails de l'abonnement</span>;

export default (props) => (
  <Show title={<Title />} {...props}>
    <SimpleShowLayout>
      <DateField source="start_date" />
      <DateField source="expiration_date" />
      <ReferenceField source="product_id" reference="products" link="show"><TextField source="name" /></ReferenceField>
      <ReferenceField source="user_id" reference="users" link="show"><TextField source="email" /></ReferenceField>
      <ReferenceManyField target="subscription_id" reference="beehives_subscriptions">
        <Datagrid>
          <ReferenceField reference="beehives" source="beehive_id" link="show">
            <TextField source="name" />
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

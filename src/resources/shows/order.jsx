import React from 'react';
import {
  Show, SimpleShowLayout, TextField, ReferenceField, NumberField, Datagrid, ReferenceManyField,
} from 'react-admin';

export default (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="price" />
      <ReferenceField source="user_id" reference="users"><TextField source="email" /></ReferenceField>
      <ReferenceManyField reference="orders_products" target="order_id">
        <Datagrid>
          <ReferenceField reference="products" source="product_id">
            <TextField source="name" />
          </ReferenceField>
          <NumberField source="quantity" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

import React from 'react';
import hasuraDataProvider from 'ra-data-hasura';
import { Admin, Resource, ListGuesser } from 'react-admin';
import addressList from './resources/addresses';
import userList from './resources/users';
import subscriptionList from './resources/subscriptions';
import beehiveList from './resources/beehives';

const headers = { 'content-type': 'application/json', 'x-hasura-admin-secret': process.env.REACT_APP_API_SECRET };

const App = () => (
  <Admin dataProvider={hasuraDataProvider('https://beeapi.herokuapp.com/', headers)}>
    <Resource name="users" list={userList} />
    <Resource name="subscriptions" list={subscriptionList} />
    <Resource name="beehives" list={beehiveList} />
    <Resource name="news" list={ListGuesser} />
    <Resource name="addresses" list={addressList} />
  </Admin>
);

export default App;
import React from 'react';
import hasuraDataProvider from 'ra-data-hasura';
import {
  Admin, Resource, ListGuesser,
} from 'react-admin';

// Lists

import addressList from './resources/lists/addresses';
import userList from './resources/lists/users';
import subscriptionList from './resources/lists/subscriptions';
import beehiveList from './resources/lists/beehives';
import newsList from './resources/lists/news';
import beehivesSubscriptionsList from './resources/lists/beehives_subscriptions';

// Shows

import addressShow from './resources/shows/address';

const headers = { 'content-type': 'application/json', 'x-hasura-admin-secret': process.env.REACT_APP_API_SECRET };

const App = () => (
  <Admin dataProvider={hasuraDataProvider('https://beeapi.herokuapp.com/', headers)}>
    <Resource name="users" list={userList} />
    <Resource name="subscriptions" list={subscriptionList} />
    <Resource name="beehives" list={beehiveList} />
    <Resource name="news" list={newsList} />
    <Resource name="products" list={ListGuesser} />
    <Resource name="beehives_subscriptions" list={beehivesSubscriptionsList} />
    <Resource name="addresses" list={addressList} show={addressShow} />
  </Admin>
);

export default App;

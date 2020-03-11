import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import hasuraDataProvider from 'ra-data-hasura-graphql';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import {
  Admin, Resource, ListGuesser, ShowGuesser,
} from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import DescriptionIcon from '@material-ui/icons/Description';
import StyleIcon from '@material-ui/icons/Style';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BusinessIcon from '@material-ui/icons/Business';


// Lists

import addressList from './resources/lists/addresses';
import userList from './resources/lists/users';
import subscriptionList from './resources/lists/subscriptions';
import beehiveList from './resources/lists/beehives';
import newsList from './resources/lists/news';
import beehivesSubscriptionsList from './resources/lists/beehives_subscriptions';
import companiesList from './resources/lists/companies';
import productsList from './resources/lists/products';
import ordersList from './resources/lists/orders';

// Shows

import addressShow from './resources/shows/address';
import newsShow from './resources/shows/news';
import subscriptionShow from './resources/shows/subscription';
import userShow from './resources/shows/user';
import companyShow from './resources/shows/company';
import productShow from './resources/shows/product';
import beehiveShow from './resources/shows/beehive';
import orderShow from './resources/shows/order';

// Edits

import newsEdit from './resources/edit/News';

const headers = { 'content-type': 'application/json', 'x-hasura-admin-secret': process.env.REACT_APP_API_SECRET };

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://beeapi.herokuapp.com/v1/graphql',
    headers,
  }),
});

const App = ({ authProvider }) => {
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    hasuraDataProvider({ client })
      .then((receivedProvider) => setDataProvider(() => receivedProvider));
  }, []);

  if (!dataProvider) {
    return null;
  }

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="users" list={userList} show={userShow} icon={PeopleIcon} />
      <Resource name="subscriptions" list={subscriptionList} show={subscriptionShow} icon={CardMembershipIcon} />
      <Resource name="files" list={ListGuesser} show={ShowGuesser} icon={PostIcon} />
      <Resource name="orders_products" list={ListGuesser} show={ShowGuesser} />
      <Resource name="orders" list={ordersList} show={orderShow} icon={ShoppingCartIcon} />
      <Resource name="beehives" list={beehiveList} show={beehiveShow} icon={EmojiNatureIcon} />
      <Resource name="news" list={newsList} show={newsShow} edit={newsEdit} icon={DescriptionIcon} />
      <Resource name="products" list={productsList} show={productShow} icon={StyleIcon} />
      <Resource name="beehives_subscriptions" list={beehivesSubscriptionsList} />
      <Resource name="addresses" list={addressList} show={addressShow} icon={ContactMailIcon} />
      <Resource name="companies" list={companiesList} show={companyShow} icon={BusinessIcon} />
    </Admin>
  );
};

App.propTypes = {
  authProvider: PropTypes.objectOf({
    login: PropTypes.func,
    logout: PropTypes.func,
    checkAuth: PropTypes.func,
    checkError: PropTypes.func,
    getPermissions: PropTypes.func,
  }).isRequired,
};

export default App;

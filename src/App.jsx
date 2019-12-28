import React from 'react';
import hasuraDataProvider from 'ra-data-hasura';
import {
  Admin, Resource, ListGuesser, ShowGuesser,
} from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import PeopleIcon from '@material-ui/icons/People';
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

// Shows

import addressShow from './resources/shows/address';
import newsShow from './resources/shows/news';
import subscriptionShow from './resources/shows/subscription';
import userShow from './resources/shows/user';
import companyShow from './resources/shows/company';
import productShow from './resources/shows/product';

const headers = { 'content-type': 'application/json', 'x-hasura-admin-secret': process.env.REACT_APP_API_SECRET };

const App = () => (
  <Admin dataProvider={hasuraDataProvider('https://beeapi.herokuapp.com/', headers)}>
    <Resource name="users" list={userList} show={userShow} icon={PeopleIcon} />
    <Resource name="subscriptions" list={subscriptionList} show={subscriptionShow} icon={CardMembershipIcon} />
    <Resource name="files" list={ListGuesser} show={ShowGuesser} icon={PostIcon} />
    <Resource name="beehives" list={beehiveList} show={ShowGuesser} icon={EmojiNatureIcon} />
    <Resource name="news" list={newsList} show={newsShow} icon={DescriptionIcon} />
    <Resource name="products" list={productsList} show={productShow} icon={StyleIcon} />
    <Resource name="beehives_subscriptions" list={beehivesSubscriptionsList} />
    <Resource name="addresses" list={addressList} show={addressShow} icon={ContactMailIcon} />
    <Resource name="companies" list={companiesList} show={companyShow} icon={BusinessIcon} />
  </Admin>
);

export default App;

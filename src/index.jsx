import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

import 'firebaseui/dist/firebaseui.css';

import App from './App';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_SECRET,
  authDomain: 'bee-api-7e7b5.firebaseapp.com',
  databaseURL: 'https://bee-api-7e7b5.firebaseio.com',
  projectId: 'bee-api-7e7b5',
  storageBucket: 'bee-api-7e7b5.appspot.com',
  messagingSenderId: '111272197681',
  appId: '1:111272197681:web:917ffa0d7527aa793e1f10',
  measurementId: 'G-MDNZY58G9G',
};


firebase.initializeApp(firebaseConfig);

const authProvider = {
  login: ({ username, password }) => firebase.auth().signInWithEmailAndPassword(username, password),
  logout: () => firebase.auth().signOut(),
  checkAuth: () => (firebase.auth().currentUser ? Promise.resolve() : Promise.reject()),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};


ReactDOM.render(<App authProvider={authProvider} />, document.getElementById('root'));

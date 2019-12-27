import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
// import { auth } from 'firebaseui';

import 'firebaseui/dist/firebaseui.css';

import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyBeEcNtOBsznDWf6dlAvnk2qOHE-G8s-TQ',
  authDomain: 'bee-api-7e7b5.firebaseapp.com',
  databaseURL: 'https://bee-api-7e7b5.firebaseio.com',
  projectId: 'bee-api-7e7b5',
  storageBucket: 'bee-api-7e7b5.appspot.com',
  messagingSenderId: '111272197681',
  appId: '1:111272197681:web:917ffa0d7527aa793e1f10',
  measurementId: 'G-MDNZY58G9G',
};


firebase.initializeApp(firebaseConfig);


// const ui = new auth.AuthUI(firebase.auth());


// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   ],
//   // Other config options...
// });


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

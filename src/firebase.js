// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDlQyBbkvuKRY1BqFkBDNK0MhAwNwWKbso",
    authDomain: "twitter-clone-aa5c8.firebaseapp.com",
    projectId: "twitter-clone-aa5c8",
    storageBucket: "twitter-clone-aa5c8.appspot.com",
    messagingSenderId: "116857657087",
    appId: "1:116857657087:web:a2ee2a0070cf385d06deca",
    measurementId: "G-F9L2DTG9W1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
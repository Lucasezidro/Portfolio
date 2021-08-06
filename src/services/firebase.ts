import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAQNhbT_oJM-GZpRbkjGw7u1nNkpax6wCk",
    authDomain: "portfolio-cc802.firebaseapp.com",
    projectId: "portfolio-cc802",
    storageBucket: "portfolio-cc802.appspot.com",
    messagingSenderId: "1025235758633",
    appId: "1:1025235758633:web:1f10a9ffbaf1cce0f0f638"
  };

!firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.app()

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
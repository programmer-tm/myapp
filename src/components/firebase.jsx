import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBV4hSCZ-bWpfh7i9A9Ayn58udh1-Pmz6M",
  authDomain: "xuynya-261d5.firebaseapp.com",
  projectId: "xuynya-261d5",
  storageBucket: "xuynya-261d5.appspot.com",
  messagingSenderId: "667174714630",
  appId: "1:667174714630:web:3d6c01390591e14b52b287",
  measurementId: "G-5NTQG95X1T"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();
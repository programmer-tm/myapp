import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBAL4S0pV535F4jMBhAY_jYrer2DropGdo",
  authDomain: "fire-87d15.firebaseapp.com",
  projectId: "fire-87d15",
  storageBucket: "fire-87d15.appspot.com",
  messagingSenderId: "12842994002",
  appId: "1:12842994002:web:a3552e79301d6fcdbe528b"
};
const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();
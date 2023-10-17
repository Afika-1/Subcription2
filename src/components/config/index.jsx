// import firebase from "firebase/app"
// import "firebase/firestore" 

import { initializeApp } from 'firebase/app'
import {getDatabase} from "firebase/database"

function MyFirebaseApp(){
  const firebaseConfig = {
    apiKey: "AIzaSyD51ijfzE7G8Perq4qFw6zMas1HhaKxSnk",
    authDomain: "newsletter-92ca9.firebaseapp.com",
    databaseURL: "https://newsletter-92ca9-default-rtdb.firebaseio.com",
    projectId: "newsletter-92ca9",
    storageBucket: "newsletter-92ca9.appspot.com",
    messagingSenderId: "31299446982",
    appId: "1:31299446982:web:bf577621e18e7e9a634fc7"
  };
  
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
export default MyFirebaseApp
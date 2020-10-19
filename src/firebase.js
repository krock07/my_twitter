// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKp23_gPzMALPrTvHhiDddvd3qWe-9GgU",
  authDomain: "twitter-1cbac.firebaseapp.com",
  databaseURL: "https://twitter-1cbac.firebaseio.com",
  projectId: "twitter-1cbac",
  storageBucket: "twitter-1cbac.appspot.com",
  messagingSenderId: "470901484683",
  appId: "1:470901484683:web:fb87345d33f3ae409f788e",
  measurementId: "G-8LWG65WYW4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

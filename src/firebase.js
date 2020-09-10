import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCI0vIC5koP5rzQZf704Y1Jfh7cUPGxY8I",
  authDomain: "clone-76219.firebaseapp.com",
  databaseURL: "https://clone-76219.firebaseio.com",
  projectId: "clone-76219",
  storageBucket: "clone-76219.appspot.com",
  messagingSenderId: "438542828073",
  appId: "1:438542828073:web:ba9e5b45d89a5e3b65d238",
  measurementId: "G-77EWMFW22M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

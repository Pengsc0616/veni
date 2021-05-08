// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtgqOf1vmWA86fk50Y9NnD-CBN3iL9-Yo",
    authDomain: "veni-75b0b.firebaseapp.com",
    projectId: "veni-75b0b",
    storageBucket: "veni-75b0b.appspot.com",
    messagingSenderId: "536087860041",
    appId: "1:536087860041:web:d4ed46e4c7f552cec48098",
    measurementId: "G-K17G7Z6HH9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;
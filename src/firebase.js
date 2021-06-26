import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBuiM2zHKgDOW9XU5UpZofGlktKk8r6UEI",
  authDomain: "projetttt-2af8e.firebaseapp.com",
  projectId: "projetttt-2af8e",
  storageBucket: "projetttt-2af8e.appspot.com",
  messagingSenderId: "860586086409",
  appId: "1:860586086409:web:aa730ac666754e656368d8"

});

const db = firebaseApp.firestore();

export default db;

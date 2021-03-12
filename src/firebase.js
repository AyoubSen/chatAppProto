import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkefxFSCwdsFy3YnHaP2eyo8UCDyZtLs4",
  authDomain: "chat-app-prototype-48ece.firebaseapp.com",
  databaseURL: "https://chat-app-prototype-48ece-default-rtdb.firebaseio.com",
  projectId: "chat-app-prototype-48ece",
  storageBucket: "chat-app-prototype-48ece.appspot.com",
  messagingSenderId: "167830417157",
  appId: "1:167830417157:web:ef3a91b184f746581cd16c",
});

const db = firebaseApp.firestore();

export default db;

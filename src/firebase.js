// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyApylIwr_h0CiY-Ib6vtmjViCZpplT-Fpg",
    authDomain: "slack-clone-dade2.firebaseapp.com",
    databaseURL: "https://slack-clone-dade2.firebaseio.com",
    projectId: "slack-clone-dade2",
    storageBucket: "slack-clone-dade2.appspot.com",
    messagingSenderId: "716470088608",
    appId: "1:716470088608:web:485eeb4a95667420156ac5",
    measurementId: "G-C8Q3FGVPHF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};

export default db;

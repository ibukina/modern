import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAzg3cFwHsR5fmQNdq8CaeM2bcn0dq2NGY",
    authDomain: "modernfront-bc8d6.firebaseapp.com",
    projectId: "modernfront-bc8d6",
    storageBucket: "modernfront-bc8d6.appspot.com",
    messagingSenderId: "450083418630",
    appId: "1:450083418630:web:e3fb32e0d7e31e1a5bc987",
    measurementId: "G-8MNZ38011M"
  });
}

export default firebase;
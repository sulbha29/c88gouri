import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDFze_JaSkXWPgXp5YKDIHJOQrIkCFfFQc",
  authDomain: "gouribooksanta-c5121.firebaseapp.com",
  databaseURL: "https://gouribooksanta-c5121.firebaseio.com",
  projectId: "gouribooksanta-c5121",
  storageBucket: "gouribooksanta-c5121.appspot.com",
  messagingSenderId: "884896499765",
  appId: "1:884896499765:web:43b318615dda22bcf5c97c"
};// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

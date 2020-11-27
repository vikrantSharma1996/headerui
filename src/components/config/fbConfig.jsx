import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5jL3jKzAK-nJ2i9_YsIiw2qeLFSkVOMI",
    authDomain: "eating-app-cbf67.firebaseapp.com",
    databaseURL: "https://eating-app-cbf67.firebaseio.com",
    projectId: "eating-app-cbf67",
    storageBucket: "eating-app-cbf67.appspot.com",
    messagingSenderId: "251259798524",
    appId: "1:251259798524:web:83204ae4b0e813c053e879"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;

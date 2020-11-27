// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import  firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
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

// Finally, export it to use it throughout your app
export default firebase;

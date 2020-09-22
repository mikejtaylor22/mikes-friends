import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDhCqWMSLzHBDojymKipeK_nZrGm7IGz8U",
    authDomain: "mikes-friends.firebaseapp.com",
    databaseURL: "https://mikes-friends.firebaseio.com",
    projectId: "mikes-friends",
    storageBucket: "mikes-friends.appspot.com",
    messagingSenderId: "873598182416",
    appId: "1:873598182416:web:071b2bf748949e20ea5695",
    measurementId: "G-4GDQGVB3DB"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()
  firebase.analytics();
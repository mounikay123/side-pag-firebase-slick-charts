import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyA4ieNVcJbuPL-O5R_xO7QxJPNPH-TN55I",
    authDomain: "login2-b0e7d.firebaseapp.com",
    databaseURL: "https://login2-b0e7d.firebaseio.com",
    projectId: "login2-b0e7d",
    storageBucket: "",
    messagingSenderId: "712343892920",
    appId: "1:712343892920:web:ecbb46e42fed5b75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 export default firebase;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANfrOMkJfupDhphdY8EaZufZ9y4BSpqV4",
  authDomain: "projet-de-specialisation.firebaseapp.com",
  projectId: "projet-de-specialisation",
  storageBucket: "projet-de-specialisation.appspot.com",
  messagingSenderId: "1026518851330",
  appId: "1:1026518851330:web:9a5e834808f50588f46c1b",
  measurementId: "G-8336STTQV3"
};



// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();



export default db;


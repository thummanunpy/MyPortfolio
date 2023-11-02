import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBoIqbyAFTMB4tUDafmiyunkfgzCi0FB5Q",
  authDomain: "chat-web-app-d916f.firebaseapp.com",
  databaseURL: "https://chat-web-app-d916f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-web-app-d916f",
  storageBucket: "chat-web-app-d916f.appspot.com",
  messagingSenderId: "858114599081",
  appId: "1:858114599081:web:a12a3fbef58b95938661b8",
  measurementId: "G-YXZ6HSBJNX"
};

// Initialize Firebase
const firebaseInitial = initializeApp(firebaseConfig);
const auth = getAuth(firebaseInitial);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseInitial);

export { auth, database }
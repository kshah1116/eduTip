
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDD4P-iLMPD0gtJFdQYOs13_xG0wnu-gyY",
  authDomain: "edutip-5162a.firebaseapp.com",
  projectId: "edutip-5162a",
  storageBucket: "edutip-5162a.appspot.com",
  messagingSenderId: "1068222704099",
  appId: "1:1068222704099:web:be8b69c7cd486a72bb18d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth()
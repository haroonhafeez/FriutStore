import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAmKimL6I9449fuylLI-NKTTr-1SSK6MQI",
  authDomain: "friutstore.firebaseapp.com",
  projectId: "friutstore",
  storageBucket: "friutstore.appspot.com",
  messagingSenderId: "894736600908",
  appId: "1:894736600908:web:49348740172c71254689e9",
  measurementId: "G-D4SYXM4H0R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
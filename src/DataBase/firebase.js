// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCe3jCuGc4AfSpCfGVBirSOr5ORouQDKrQ",
  authDomain: "recordatorios-8e385.firebaseapp.com",
  databaseURL: "https://recordatorios-8e385-default-rtdb.firebaseio.com",
  projectId: "recordatorios-8e385",
  storageBucket: "recordatorios-8e385.appspot.com",
  messagingSenderId: "758600612397",
  appId: "1:758600612397:web:c108cbf6d3978a1c8056a4",
  measurementId: "G-47KKRDHE8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };

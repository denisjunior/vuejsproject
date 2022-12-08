import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDsXSjHb6hgyNLw2fmHGAS4RXis8u7rXto",
  authDomain: "projet-vuejs-b7a6b.firebaseapp.com",
  projectId: "projet-vuejs-b7a6b",
  storageBucket: "projet-vuejs-b7a6b.appspot.com",
  messagingSenderId: "581327181626",
  appId: "1:581327181626:web:e7c669cc3404485efce203",
});
export const database = getDatabase(firebaseApp);
export const firestore = getFirestore(firebaseApp);

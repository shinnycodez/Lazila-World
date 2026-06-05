// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
 apiKey: "AIzaSyAoe-LNqtZ115hTaivyUnLbY3G6OsF9ZtU",
  authDomain: "laliza-world.firebaseapp.com",
  projectId: "laliza-world",
  storageBucket: "laliza-world.firebasestorage.app",
  messagingSenderId: "401442010134",
  appId: "1:401442010134:web:fb18c53de6c208c2197137",
  measurementId: "G-7K2T2LMY7M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };
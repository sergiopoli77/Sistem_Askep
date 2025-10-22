import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChB66UK0oB7RTOPcUl5jIS3weDzYXPlGA",
  authDomain: "devops-27a44.firebaseapp.com",
  databaseURL: "https://devops-27a44-default-rtdb.firebaseio.com",
  projectId: "devops-27a44",
  storageBucket: "devops-27a44.firebasestorage.app",
  messagingSenderId: "1073602467369",
  appId: "1:1073602467369:web:0721667b0d53d2a58eee38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Realtime Database instance
export const db = getDatabase(app);
export default app;

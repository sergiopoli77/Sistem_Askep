// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIqIippknMoHR8KjQOJEID54U-2QECPOw",
  authDomain: "devops-project-4a975.firebaseapp.com",
  databaseURL: "https://devops-project-4a975-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "devops-project-4a975",
  storageBucket: "devops-project-4a975.firebasestorage.app",
  messagingSenderId: "587944696107",
  appId: "1:587944696107:web:46c75a52b4e979add90d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and export for use in pages
const db = getDatabase(app);

export { app, db };
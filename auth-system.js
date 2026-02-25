import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Config Milik Zane
const firebaseConfig = {
  apiKey: "AIzaSyDhX_OUDrIzGTp50PlimqOUVZ0GQEgZ4Ss",
  authDomain: "lab-cyber.firebaseapp.com",
  projectId: "lab-cyber",
  storageBucket: "lab-cyber.firebasestorage.app",
  messagingSenderId: "118774240133",
  appId: "1:118774240133:web:ad8ab300d781a19a922aec",
  measurementId: "G-FQW1S23BRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Railway Backend URL (Endpoint Utama untuk Police, Red, dan Blue Team)
export const BACKEND_URL = "https://lab-beckend-production.up.railway.app";

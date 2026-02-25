import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhX_OUDrIzGTp50PlimqOUVZ0GQEgZ4Ss",
  authDomain: "lab-cyber.firebaseapp.com",
  projectId: "lab-cyber",
  storageBucket: "lab-cyber.firebasestorage.app",
  messagingSenderId: "118774240133",
  appId: "1:118774240133:web:ad8ab300d781a19a922aec",
  measurementId: "G-FQW1S23BRD"
};

// Initialize Firebase & Export
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const BACKEND_URL = "https://lab-beckend-production.up.railway.app";

// --- 1. FUNGSI REGISTER (BUAT MEMBER BARU) ---
export const registerUser = async (email, password, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Simpan Profile Awal ke Firestore (Kasta Member)
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email,
            role: "MEMBER",
            rank: "MEMBER",
            post_count: 0,
            stars_count: 0,
            created_at: new Date().toISOString()
        });

        return { success: true, user };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// --- 2. FUNGSI LOGIN (EMAIL & PASSWORD) ---
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// --- 3. FUNGSI LOGOUT ---
export const logoutUser = () => signOut(auth);

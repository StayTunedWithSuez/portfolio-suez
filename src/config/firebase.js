
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBXIlGo_Stckqpt1i84bjgPxs99eIO5jNk",
  authDomain: "portfolio-suez.firebaseapp.com",
  projectId: "portfolio-suez",
  storageBucket: "portfolio-suez.firebasestorage.app",
  messagingSenderId: "31610995739",
  appId: "1:31610995739:web:b3eefd95eb79f76fe5e4be",
  measurementId: "G-J3XNQB1J7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
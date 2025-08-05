
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDPyp0JsTawmXlX7OHmMn5ZJv4U3i10cE",
  authDomain: "yayasan-siswa-bangsa-sem-9uim7.firebaseapp.com",
  projectId: "yayasan-siswa-bangsa-sem-9uim7",
  storageBucket: "yayasan-siswa-bangsa-sem-9uim7.appspot.com",
  messagingSenderId: "529251653080",
  appId: "1:529251653080:web:096fdd1f1838df67e54ead"
};

// Initialize Firebase
let app;
let db;

try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
} catch (error) {
    console.error("Firebase initialization error:", error);
    // In case of error, db will be undefined and the app can handle it gracefully.
}


export { db };


// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

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
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);


export { db, auth };

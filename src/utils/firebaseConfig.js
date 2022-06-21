// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtglvEK64POIWRySaZaObeBNKb9-iBbeM",
  authDomain: "ar-automotores.firebaseapp.com",
  projectId: "ar-automotores",
  storageBucket: "ar-automotores.appspot.com",
  messagingSenderId: "608306052034",
  appId: "1:608306052034:web:be386b1c871fb4aeb9b45b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore initialize
const db = getFirestore(app);


export default db
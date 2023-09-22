
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID ,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, 
  appId:import.meta.env.VITE_FIREBASE_APP_ID ,
  
};

/* const firebaseConfig = { 
apiKey : "AIzaSyBdYg4piDmDKLucuc-fCsJ-isVcoLaaWnM",
 authDomain : "doctor-appointment-b715d.firebaseapp.com",
 projectId : "doctor-appointment-b715d",
 storageBucket : "doctor-appointment-b715d.appspot.com",
 messagingSenderId : "147099003615",
 appId : "1:147099003615:web:b683992c89ce9b86e8d76a",
}; */

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkGkGKKWvDSpBl2fU-fO4Q2mo14Cc6BPs",
  authDomain: "cotdigitalclon.firebaseapp.com",
  projectId: "cotdigitalclon",
  storageBucket: "cotdigitalclon.appspot.com",
  messagingSenderId: "137846028111",
  appId: "1:137846028111:web:b43a7252af9329c3f9773a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcGoANia0sqlV7OczKvX1ISImLzQ6qriQ",
  authDomain: "cotodigitalclon.firebaseapp.com",
  projectId: "cotodigitalclon",
  storageBucket: "cotodigitalclon.appspot.com",
  messagingSenderId: "76577900064",
  appId: "1:76577900064:web:22f96c0226b63acfe4de45",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

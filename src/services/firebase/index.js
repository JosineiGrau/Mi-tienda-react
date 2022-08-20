import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6Nlp7fiT2_JRtREm19jpRPiQK7SEubxE",
  authDomain: "mitienda-90066.firebaseapp.com",
  projectId: "mitienda-90066",
  storageBucket: "mitienda-90066.appspot.com",
  messagingSenderId: "264633325262",
  appId: "1:264633325262:web:4ec33bc3a75f77b3ae229f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
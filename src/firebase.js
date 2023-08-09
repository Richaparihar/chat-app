import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFiWnwtTJ_VtWQ6yIWEP6wDYW1lYzt4tw",
  authDomain: "chat-app-38531.firebaseapp.com",
  projectId: "chat-app-38531",
  storageBucket: "chat-app-38531.appspot.com",
  messagingSenderId: "853017299217",
  appId: "1:853017299217:web:713f9b52a4e0d5a99364b0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA17C1ZtjB3sntIZCuOAyJtJBl2IJGNDQs",
  authDomain: "ollykayportfolio.firebaseapp.com",
  projectId: "ollykayportfolio",
  storageBucket: "ollykayportfolio.firebasestorage.app",
  messagingSenderId: "522993389638",
  appId: "1:522993389638:web:e3c604f6f28fad60b5fa47",
  measurementId: "G-N0N1YD4TGQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

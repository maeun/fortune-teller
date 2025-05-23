// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEKfwNC9BBii0JUxx6lyE1u8bC_0fFdVg",
  authDomain: "fortune-teller-fd566.firebaseapp.com",
  projectId: "fortune-teller-fd566",
  storageBucket: "fortune-teller-fd566.firebasestorage.app",
  messagingSenderId: "630466290667",
  appId: "1:630466290667:web:16fc509b7ef123ae716fae",
  measurementId: "G-163D3E75D1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const saveFortune = async (formData, fortuneText) => {
  try {
    await addDoc(collection(db, "fortunes"), {
      ...formData,
      fortune: fortuneText,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving fortune to Firestore:", error);
  }
};
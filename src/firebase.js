import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApSsTbrC89idDdjYuRsFRsJvuSKJqS3G4",
  authDomain: "devrohit-6a889.firebaseapp.com",
  projectId: "devrohit-6a889",
  storageBucket: "devrohit-6a889.appspot.com",
  messagingSenderId: "39604163205",
  appId: "1:39604163205:web:d4b79746b2441c47808fec"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig, { measurementId: undefined });

// Initialize Firestore
let db;
try {
  db = getFirestore(app);
  console.log('Firestore initialized successfully');
} catch (error) {
  console.error('Error initializing Firestore:', error);
}

// Initialize Storage
let storage;
try {
  storage = getStorage(app);
  console.log('Storage initialized successfully');
} catch (error) {
  console.error('Error initializing Storage:', error);
}

export { db, storage };

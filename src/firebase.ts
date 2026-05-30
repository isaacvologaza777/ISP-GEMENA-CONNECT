import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth();
const storageInstance = getStorage(app);
storageInstance.maxUploadRetryTime = 600000; // 10 minutes
storageInstance.maxOperationRetryTime = 600000; // 10 minutes
export const storage = storageInstance;

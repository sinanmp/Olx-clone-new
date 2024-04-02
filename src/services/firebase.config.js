import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDPHSpRD5cjs3iDCP9so4CHbObGM-_qsBg",
  authDomain: "olx-clone-ed8a0.firebaseapp.com",
  projectId: "olx-clone-ed8a0",
  storageBucket: "olx-clone-ed8a0.appspot.com",
  messagingSenderId: "769012425141",
  appId: "1:769012425141:web:91acc122244f039728b9fc",
  measurementId: "G-EEDF2VDV5F"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app); 

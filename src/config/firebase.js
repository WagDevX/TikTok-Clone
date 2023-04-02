
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyB-OTjbw5YDwHpJALZ4BkU6le00RhNmz00",
  authDomain: "tiktok---jornada-770ff.firebaseapp.com",
  projectId: "tiktok---jornada-770ff",
  storageBucket: "tiktok---jornada-770ff.appspot.com",
  messagingSenderId: "1035005275508",
  appId: "1:1035005275508:web:cc470faa7048f69943d021"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
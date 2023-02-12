import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-SIHzcwGQrRT_Xa3WF5XRPE2BLQnyOCw",
  authDomain: "docs-43dd2.firebaseapp.com",
  projectId: "docs-43dd2",
  storageBucket: "docs-43dd2.appspot.com",
  messagingSenderId: "619052810609",
  appId: "1:619052810609:web:547389d85e8b88d85af6d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); 
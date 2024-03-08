import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'



// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_HIc6-v3NKHsj5YPe7aINSCuXbv75xA8",
    authDomain: "olx-clone-app-8aca9.firebaseapp.com",
    projectId: "olx-clone-app-8aca9",
    storageBucket: "olx-clone-app-8aca9.appspot.com",
    messagingSenderId: "922100036363",
    appId: "1:922100036363:web:036e63c31c3d2e0e28280e",
    measurementId: "G-FP8X6LNKB0"
};



export const Firebase = initializeApp(firebaseConfig);

const Firestore = getFirestore(Firebase)
const storage = getStorage(Firebase)
const auth = getAuth(Firebase);


// export { auth, Firestore, storage };
export { Firestore, storage,auth };
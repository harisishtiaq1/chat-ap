// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-x6pzuDkqkyT5WHsE7JxY59Oe0dwL-DA",
  authDomain: "chatapp-2e310.firebaseapp.com",
  projectId: "chatapp-2e310",
  storageBucket: "chatapp-2e310.appspot.com",
  messagingSenderId: "937416876689",
  appId: "1:937416876689:web:ba62b9993bca8a70d85530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider = new GoogleAuthProvider()
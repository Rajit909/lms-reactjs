import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeQwuVzgAiuDjgs_0cN6A9INXTxSvQ4A0",
  authDomain: "lms-dev-a3f1d.firebaseapp.com",
  projectId: "lms-dev-a3f1d",
  storageBucket: "lms-dev-a3f1d.appspot.com",
  messagingSenderId: "256523968407",
  appId: "1:256523968407:web:0415c87c533f401b0d2ed2",
  measurementId: "G-D1BEQ227TC"
};

// Initialize Firebase
const lms = firebase.initializeApp(firebaseConfig);

lms.analytics();
// firebase.analytics();
const db = lms.firestore();
const auth = lms.auth();
const storage = lms.storage();

export { db, auth, firebase, storage };

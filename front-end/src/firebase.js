// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD2Rq4DeiAP1HrcuuORIdcHnphCAsplfg",

  authDomain: "tattootemplate.firebaseapp.com",

  projectId: "tattootemplate",

  storageBucket: "tattootemplate.appspot.com",

  messagingSenderId: "687650192000",

  appId: "1:687650192000:web:c406f42000724c6eba0465",

  measurementId: "G-LPV5EYDS2Y",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// auth services
export const auth = getAuth();
// in it services
export const database = getFirestore(app);

// collection references
// collection(database you want to work with, "collection you want to work with")
export const colRef = collection(database, "artists");
export const consultationQuery = collection(database, "consultations");
export const waiverQuery = collection(database, "waivers");

// signup function
export const adminToken =
"qEMdRJJqGqcAcdcEWcaqijYVmCC2"
import firebase from "firebase/compat";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1mHsUZYXiLNiOcIDJSWrCscp9o5uN0S0",
  authDomain: "tmdt-90f8e.firebaseapp.com",
  projectId: "tmdt-90f8e",
  storageBucket: "tmdt-90f8e.appspot.com",
  messagingSenderId: "24784964077",
  appId: "1:24784964077:web:96fc5d4983bee8b9db7fe4",
  measurementId: "G-EF1TKE5231"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)

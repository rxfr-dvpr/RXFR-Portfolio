import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6E4Jst24yb-bcPHNVwIuutxiKJfW7Tpk",
  authDomain: "rxfr-portfolio.firebaseapp.com",
  databaseURL: "https://rxfr-portfolio-default-rtdb.firebaseio.com",
  projectId: "rxfr-portfolio",
  storageBucket: "rxfr-portfolio.appspot.com",
  messagingSenderId: "675621147239",
  appId: "1:675621147239:web:c8aa4dabf24d89016ffac2",
  measurementId: "G-1ENT6H3496"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

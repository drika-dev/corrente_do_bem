import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTuMyKUlpdtx6s3cEN2cwHBZwXtH_btfE",
  authDomain: "corrente-do-bem-79ee2.firebaseapp.com",
  projectId: "corrente-do-bem-79ee2",
  storageBucket: "corrente-do-bem-79ee2.appspot.com",
  messagingSenderId: "1056783222321",
  appId: "1:1056783222321:web:b323818ac490e50420b710",
  measurementId: "G-SKBWMK211H"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
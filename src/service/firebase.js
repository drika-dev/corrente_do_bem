import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6Uz7kHjfujwHWA6hCR_Gx81zloWEBVBI",
  authDomain: "projeto-corrente-do-bem-fed9f.firebaseapp.com",
  projectId: "projeto-corrente-do-bem-fed9f",
  storageBucket: "projeto-corrente-do-bem-fed9f.appspot.com",
  messagingSenderId: "204739435403",
  appId: "1:204739435403:web:e9eba07d9ba7eb832f2d8e",
  measurementId: "G-BJ5J6DQ5KX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL8erbPXSEjLc_9rbByzINo0nOginiBaU",
  authDomain: "phone-auth-f245d.firebaseapp.com",
  projectId: "phone-auth-f245d",
  storageBucket: "phone-auth-f245d.appspot.com",
  messagingSenderId: "363876292535",
  appId: "1:363876292535:web:4c4a8c0cfdeecf423cba32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

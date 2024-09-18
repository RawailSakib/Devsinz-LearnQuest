import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjcqY3w0FPQkTGXEqDCUcHxZkyd5JmXw0",
  authDomain: "learn-quest-e7487.firebaseapp.com",
  projectId: "learn-quest-e7487",
  storageBucket: "learn-quest-e7487.appspot.com",
  messagingSenderId: "863858150589",
  appId: "1:863858150589:web:d371ad9bc044d1eafdbbd4",
  measurementId: "G-KTEVS0WVTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };

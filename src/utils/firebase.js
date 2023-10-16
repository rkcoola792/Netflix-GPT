import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNeSFgfVHoO--Z-Q_fAQj8KyvqcrfUMNo",
  authDomain: "netflixgpt-98b90.firebaseapp.com",
  projectId: "netflixgpt-98b90",
  storageBucket: "netflixgpt-98b90.appspot.com",
  messagingSenderId: "219801010488",
  appId: "1:219801010488:web:30ddb220a12835f6a8c1cd",
  measurementId: "G-80RMBGTDCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

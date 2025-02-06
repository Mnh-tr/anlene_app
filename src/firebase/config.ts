// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkGyLCxZBH5gvF0GPrecZ9Btc0aTq-Iv8",
  authDomain: "startreact-cf835.firebaseapp.com",
  projectId: "startreact-cf835",
  storageBucket: "startreact-cf835.appspot.com",
  messagingSenderId: "94345318468",
  appId: "1:94345318468:web:a93ff1be76d69b87c12c11",
  measurementId: "G-1GT8YCXT8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Storage
export const storage = getStorage(app); // Export Firebase Storage để sử dụng trong các phần khác
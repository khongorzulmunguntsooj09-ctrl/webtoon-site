
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBZKtl10e4DnBWK1JtJk1ecUG3SloFuHUI",
    authDomain: "webtoon-site-1c6d9.firebaseapp.com",
    projectId: "webtoon-site-1c6d9",
    storageBucket: "webtoon-site-1c6d9.firebasestorage.app",
    messagingSenderId: "792284885786",
    appId: "1:792284885786:web:5d7b0a3456fbf8b243f2a3",
    measurementId: "G-7VD4CJ74YK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
import { getFirestore } from 
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);

window.app = app;
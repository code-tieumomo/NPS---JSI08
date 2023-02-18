// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu8nu_ZbvqAgm9nUUxOaem6ttbSbzf2g8",
  authDomain: "signup-b00b6.firebaseapp.com",
  projectId: "signup-b00b6",
  storageBucket: "signup-b00b6.appspot.com",
  messagingSenderId: "732088202363",
  appId: "1:732088202363:web:7f9551b566edd3a178dede",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
if (document.querySelector("#log-out")) {
  document.querySelector("#log-out").addEventListener("click", () => { 
    signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
      window.location.href = "../home_page/homepage.html";
    })
    .catch((error) => {
    }); 
  });
}

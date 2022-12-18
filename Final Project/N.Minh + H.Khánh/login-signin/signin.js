// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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
const provider = new GoogleAuthProvider();
const signupBtn = document.getElementById("sign_up");
signupBtn.onclick = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user))
      window.location.href = "../home_page/home.html"
      
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
function submit(){
    const firstname = document.getElementById("firstname")
    const lastname = document.getElementById("lastname")
    const phonenumber = document.getElementById("phonenumber")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
}

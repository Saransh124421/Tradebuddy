// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaIWGIq_V8apIfBVlD1P0IZRqQsVWvvCI",
    authDomain: "tradebuddy-1ddfa.firebaseapp.com",
    databaseURL: "https://tradebuddy-1ddfa-default-rtdb.firebaseio.com",
    projectId: "tradebuddy-1ddfa",
    storageBucket: "tradebuddy-1ddfa.appspot.com",
    messagingSenderId: "882020861754",
    appId: "1:882020861754:web:afd863eeffe3509707b203",
    measurementId: "G-LLQ9D1ELT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Event listener for form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Login successful!");
            window.location.href = 'kirayepe.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

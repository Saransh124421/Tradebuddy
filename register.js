// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBaIWGIq_V8apIfBVlD1P0IZRqQsVWvvCI",
//     authDomain: "tradebuddy-1ddfa.firebaseapp.com",
//     databaseURL: "https://tradebuddy-1ddfa-default-rtdb.firebaseio.com",
//     projectId: "tradebuddy-1ddfa",
//     storageBucket: "tradebuddy-1ddfa.appspot.com",
//     messagingSenderId: "882020861754",
//     appId: "1:882020861754:web:afd863eeffe3509707b203",
//     measurementId: "G-LLQ9D1ELT0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// //submit button

// const submit = document.getElementById('submit');
// submit.addEventListener("click", function (event) {
//     event.preventDefault()

//     // inputs
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const userID = document.getElementById('userID').value;

//     createUserWithEmailAndPassword(auth, username, password)
//         .then((userCredential) => {
//             // Signed up

//             const user = userCredential.user;
//             alert("Creating Account...")
//             window.location.href ='kirayepe.html'
//         })

//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage)
//         });




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBaIWGIq_V8apIfBVlD1P0IZRqQsVWvvCI",
//     authDomain: "tradebuddy-1ddfa.firebaseapp.com",
//     databaseURL: "https://tradebuddy-1ddfa-default-rtdb.firebaseio.com",
//     projectId: "tradebuddy-1ddfa",
//     storageBucket: "tradebuddy-1ddfa.appspot.com",
//     messagingSenderId: "882020861754",
//     appId: "1:882020861754:web:afd863eeffe3509707b203",
//     measurementId: "G-LLQ9D1ELT0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// //submit button

// const submit = document.getElementById('submit');
// submit.addEventListener("click", function (event) {
//     event.preventDefault()

//     // inputs
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const userID = document.getElementById('userID').value;

//     createUserWithEmailAndPassword(auth, username, password)
//         .then((userCredential) => {
//             // Signed up

//             const user = userCredential.user;
//             alert("Creating Account...")
//             window.location.href ='kirayepe.html'
//         })

//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage)
//         });// Import the functions you need from the SDKs you need
//         import { initializeApp } from "firebase/app";
//         import { getAnalytics } from "firebase/analytics";
        
//         import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js/auth";
        
//         // TODO: Add SDKs for Firebase products that you want to use
//         // https://firebase.google.com/docs/web/setup#available-libraries
        
//         // Your web app's Firebase configuration
//         // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//         const firebaseConfig = {
//             apiKey: "AIzaSyBaIWGIq_V8apIfBVlD1P0IZRqQsVWvvCI",
//             authDomain: "tradebuddy-1ddfa.firebaseapp.com",
//             databaseURL: "https://tradebuddy-1ddfa-default-rtdb.firebaseio.com",
//             projectId: "tradebuddy-1ddfa",
//             storageBucket: "tradebuddy-1ddfa.appspot.com",
//             messagingSenderId: "882020861754",
//             appId: "1:882020861754:web:afd863eeffe3509707b203",
//             measurementId: "G-LLQ9D1ELT0"
//         };
        
//         // Initialize Firebase
//         const app = initializeApp(firebaseConfig);
//         const analytics = getAnalytics(app);
        
        
//         //submit button
        
//         const submit = document.getElementById('submit');
//         submit.addEventListener("click", function (event) {
//             event.preventDefault()
        
//             // inputs
//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;
//             const userID = document.getElementById('userID').value;
        
//             signInWithEmailAndPassword(auth, username, password)
//                 .then((userCredential) => {
//                     // Signed up
        
//                     const user = userCredential.user;
//                     alert("Creating Account...")
//                     window.location.href ='kirayepe.html'
//                 })
        
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     alert(errorMessage)
//                 });



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth(app); // Initialize auth

//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    // inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userID = document.getElementById('userID').value;

    createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Creating Account...")
            window.location.href = 'kirayepe.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlL1dAoVCx6G88fcJcDspsjNF4iKyWp6U",
  authDomain: "memory-login-94262.firebaseapp.com",
  projectId: "memory-login-94262",
  storageBucket: "memory-login-94262.firebasestorage.app",
  messagingSenderId: "462887442921",
  appId: "1:462887442921:web:635e3c16f4ce98700c5378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupForm = document.querySelector("#signup-form"),
  loginForm = document.querySelector("#login-form"),
  signupLink = document.querySelector("#signup-link"),
  loginLink = document.querySelector("#login-link"),
  pwShowHide = document.querySelectorAll(".pw_hide");

// Show login form
formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye" )
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash" )
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const formOpenBtn = document.getElementById("form-open");
  const formContainer = document.querySelector(".form_container");
  const formCloseBtn = document.querySelector(".form_close");
  const loginForm = document.querySelector(".login_form");
  const signupForm = document.querySelector(".signup_form");
  const loginSignupLinks = document.querySelectorAll(".login_signup a");
  const homeSection = document.querySelector(".home");
  
  if (formOpenBtn && formContainer) {
    formOpenBtn.addEventListener("click", function () {
      formContainer.classList.add("active");
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    });
  }

  if (formCloseBtn && formContainer) {
    formCloseBtn.addEventListener("click", function () {
      formContainer.classList.remove("active");
    });
  }

  // Toggle between login and signup forms
  loginSignupLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
      } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
      }
    });
  });
});

// Switch to signup form
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".login_form").style.display = "none";
  document.querySelector(".signup_form").style.display = "block";
});

// Switch to login form
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".signup_form").style.display = "none";
  document.querySelector(".login_form").style.display = "block";
});

// Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Redirect to realhome.html after successful login
      window.location.href = "/homepage/index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Sign Up
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;
  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Redirect to realhome.html after successful signup
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
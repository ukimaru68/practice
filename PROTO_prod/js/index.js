// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYvHoFpe5AYyrNGYnWvjOzc4q_UwbTOQU',
  authDomain: 'proto-pizza.firebaseapp.com',
  projectId: 'proto-pizza',
  storageBucket: 'proto-pizza.appspot.com',
  messagingSenderId: '349632518935',
  appId: '1:349632518935:web:b34573885baaf7c9d27552',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DBとしてFirestoreを使います
const db = getFirestore(app);
// 自分が作ったmessagesのデータをひっぱってくる
const messagesRef = collection(db, 'messages');

// 以下
const signup = document.getElementById('signupModal');
const login = document.getElementById('loginModal');
const password = document.getElementById('passwordModal');
const signupButton1 = document.getElementById('signupButton1');
const signupButton2 = document.getElementById('signupButton2');
const loginButton = document.getElementById('loginButton');
// const loginButton = document.getElementById("loginButton");
const passwordButton = document.getElementById('passwordButton');
const mask = document.getElementById('mask');
// const header = document.getElementById("changeHeader");

signupButton1.addEventListener('click', () => {
  mask.classList.remove('hidden');
  // header.classList.remove("hidden");
  signup.classList.remove('hidden');
});

loginButton.addEventListener('click', () => {
  signup.classList.add('hidden');
  login.classList.remove('hidden');
});

signupButton2.addEventListener('click', () => {
  login.classList.add('hidden');
  // header.classList.remove("hidden");
  signup.classList.remove('hidden');
});

passwordButton.addEventListener('click', () => {
  login.classList.add('hidden');
  password.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  signup.classList.add('hidden');
  login.classList.add('hidden');
  password.classList.add('hidden');
});

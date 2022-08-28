// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {
  getFirestore,
  collection,
  doc,
  Timestamp,
  addDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkTs8IWWWd9YN6KHnfwjC9plCoIX2BENM',
  authDomain: 'proto-chat-67e14.firebaseapp.com',
  projectId: 'proto-chat-67e14',
  storageBucket: 'proto-chat-67e14.appspot.com',
  messagingSenderId: '78630347319',
  appId: '1:78630347319:web:69b40428e14314374a15b2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase作成後追加（ここから追記したjs）
// DBとしてFirestoreを使います
const db = getFirestore(app);
// 自分が作ったmessagesのデータをひっぱってくる
const messagesRef = collection(db, 'messages');

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = {
    userName: document.getElementById('user_name').value,
    text: document.getElementById('text').value,
    date: Timestamp.now(),
  };
  //自動IDでドキュメントを追加
  const docRef = addDoc(messagesRef, message);
});

//データの受信
const messages = document.getElementById('chat');
const q = query(messagesRef, orderBy('date', 'desc'));
onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    // エレメント（htmlのタグ）を作る
    const elementList = document.createElement('li');
    const elementUserName = document.createElement('p');
    const elementText = document.createElement('p');

    // 各エレメントに値を持たせる→pタグの中にuserNameを追加する
    elementUserName.textContent = change.doc.data().userName;
    // elementUserName.classList.add('msg-username');
    elementUserName.classList.add('chatUserName');

    // 各エレメントに値を持たせる→pタグの中にtextを追加する
    elementText.textContent = change.doc.data().text;
    elementText.classList.add('chatText');

    // リストエレメントに、エレメントを追加する
    elementList.appendChild(elementUserName);
    elementList.appendChild(elementText);

    // 表示領域（message）に、リストエレメントを追加する
    messages.appendChild(elementList);
  });
});

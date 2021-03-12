import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAyUNVeeOlsG8Cd75HEkD1NzlY0-VZbwLg",
    authDomain: "global-chat-55981.firebaseapp.com",
    databaseURL: "https://global-chat-55981-default-rtdb.firebaseio.com/",
    projectId: "global-chat-55981",
    storageBucket: "global-chat-55981.appspot.com",
    messagingSenderId: "647779785901",
    appId: "1:647779785901:web:27faec5d45ee12a67c3a24"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

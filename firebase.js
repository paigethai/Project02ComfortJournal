import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2RAH0EJhyrcMq2vyf9AWqJBqHZcwuAsw",
    authDomain: "project-02-journal.firebaseapp.com",
    databaseURL: "https://project-02-journal-default-rtdb.firebaseio.com",
    projectId: "project-02-journal",
    storageBucket: "project-02-journal.appspot.com",
    messagingSenderId: "102847970517",
    appId: "1:102847970517:web:96f5b3b083fae53a78765c"
};

const firebaseInfo = initializeApp(firebaseConfig);

export default firebaseInfo;

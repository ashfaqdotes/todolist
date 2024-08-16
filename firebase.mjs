
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBxCovwsem_0VJ4t-mQ-gMgL9MhaDW2vjQ",
    authDomain: "demo1-28718.firebaseapp.com",
    projectId: "demo1-28718",
    storageBucket: "demo1-28718.appspot.com",
    messagingSenderId: "68905255175",
    appId: "1:68905255175:web:59d5661dc90c08f10d45a2"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db}

// console.log('Firebase app initialized:', app);

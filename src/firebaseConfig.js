// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2soURHgarcD2LNzL9KXQPYIcD8ggksmU",
  authDomain: "timotejsproject.firebaseapp.com",
  databaseURL: "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "timotejsproject",
  storageBucket: "timotejsproject.appspot.com",
  messagingSenderId: "48634571558",
  appId: "1:48634571558:web:c6503b1a820cec384b2fe7",
  measurementId: "G-3GEE105PCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { storage, database };

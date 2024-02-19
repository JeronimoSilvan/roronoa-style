import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlXH45ujMlrqFTAhCIPxVsFqqW2VCGeTo",
  authDomain: "entrega-react-6ec84.firebaseapp.com",
  projectId: "entrega-react-6ec84",
  storageBucket: "entrega-react-6ec84.appspot.com",
  messagingSenderId: "259375669669",
  appId: "1:259375669669:web:b44940abf97d1830bd084c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />
)

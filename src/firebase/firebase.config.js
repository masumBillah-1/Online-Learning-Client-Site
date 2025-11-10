// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeoxODWcApn_ozuyGCLgr-AqFogpSfVl0",
  authDomain: "online-courses-platform-73ead.firebaseapp.com",
  projectId: "online-courses-platform-73ead",
  storageBucket: "online-courses-platform-73ead.firebasestorage.app",
  messagingSenderId: "708580221215",
  appId: "1:708580221215:web:0cd05789d911ce3b0a102a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
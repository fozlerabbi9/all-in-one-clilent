import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyc9CIEgNsvJGwYQ3fZwkKXIR_nGn0cBU",
  authDomain: "all-in-one-ad955.firebaseapp.com",
  projectId: "all-in-one-ad955",
  storageBucket: "all-in-one-ad955.appspot.com",
  messagingSenderId: "972584135768",
  appId: "1:972584135768:web:648e10e493b8e7210d6e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
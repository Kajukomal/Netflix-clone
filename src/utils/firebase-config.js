import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXkbk20RfYi-HcbaxiNEHGNOwbCuR_BXA",
  authDomain: "react-netflix-clone-fdb5e.firebaseapp.com",
  projectId: "react-netflix-clone-fdb5e",
  storageBucket: "react-netflix-clone-fdb5e.appspot.com",
  messagingSenderId: "341486746993",
  appId: "1:341486746993:web:e765d49f8c689e7fa08ad0",
  measurementId: "G-WT35X5NWEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

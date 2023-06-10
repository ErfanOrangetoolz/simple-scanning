import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyD7UrksqJx1zwYNDbk1NR1kWgI6u72dGik",
  authDomain: "my-base-structure.firebaseapp.com",
  projectId: "my-base-structure",
  storageBucket: "my-base-structure.appspot.com",
  messagingSenderId: "360709077609",
  appId: "1:360709077609:web:8e72030ff2daa9c0c280f8",
};
const firbaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firbaseApp);
export default firebaseDb;

export const Tables = {
  users: "users",
  items: "items",
};

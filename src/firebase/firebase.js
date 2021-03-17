import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbhGfiP9Rm808umpK3kjYyUvpHUgK81kw",
  authDomain: "mini-insta-af42f.firebaseapp.com",
  projectId: "mini-insta-af42f",
  storageBucket: "mini-insta-af42f.appspot.com",
  messagingSenderId: "883824693155",
  appId: "1:883824693155:web:d1e76f6f65e7f2e773d416",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const storageRef = firebase.storage().ref();
export { storage, storageRef, firebase as default };

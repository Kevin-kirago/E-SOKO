import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBNv5w5UrITe698rnBWGChTL2IiPIw7oCA",
	authDomain: "e-soko-77fc0.firebaseapp.com",
	databaseURL: "https://e-soko-77fc0.firebaseio.com",
	projectId: "e-soko-77fc0",
	storageBucket: "e-soko-77fc0.appspot.com",
	messagingSenderId: "178895270594",
	appId: "1:178895270594:web:96bc01e007d66e12ac415b"
};

// TODO 1. bring in auth with email and password

// TODO 2. setup firestore with e - soko

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

// trigger google popup
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// creating no sql docs for storing users to our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// check if we are getting the user auth object
	if (!userAuth) return;

	/*
	- A query is a request we make to firestore to give us something from the database
	- Firestore returns us two types of objects: references and snapshot. 
	Of these objects, they can either be Document or Collection versions.
	- Firestore will always return us these objects, even if nothing exists at from that query.  
	*/

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// getting  a snapshot of data from the auth utility
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		// data used to create the actual document
		const { displayName, email } = userAuth;

		// new timestamp date
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log("Error creating user", err.message);
		}
	}

	return userRef;
};

// initializing the database function from firebase (firestore function)
export const firestore = firebase.firestore();

export const auth = firebase.auth();

// google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

// trigger google popup
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

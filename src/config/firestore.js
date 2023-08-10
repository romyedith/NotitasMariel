import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAXvp8TFkGmvr9mzG4PORdTQs-TECGlG1c",
	authDomain: "todo-8b87f.firebaseapp.com",
	projectId: "todo-8b87f",
	storageBucket: "todo-8b87f.appspot.com",
	messagingSenderId: "376252722761",
	appId: "1:376252722761:web:487a975c56824114621998"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// export const database = getFirestore(app);

export const database = initializeFirestore(app, {
	experimentalAutoDetectLongPolling: true,
});

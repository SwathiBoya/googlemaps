//creating one config object to store details from firebase.//We will get all ready inside firebase > ProjectOverView > < />
import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCk8DU_HmtvEU3ztkGUKCSkax1-7AN0GIY",
    authDomain: "fir-demo-10195.firebaseapp.com",
    databaseURL: "https://fir-demo-10195.firebaseio.com",
    projectId: "fir-demo-10195",
    storageBucket: "fir-demo-10195.appspot.com",
    messagingSenderId: "831484121980"
};
let app = Firebase.initializeApp(config); //To initializeApp

export const db = app.database(); //For Database operations

export const firebaseApp=app.auth();
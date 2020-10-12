import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAns0sjKPHXlrsrgKCWuDP28BlHapxRIBI",
    authDomain: "clone-600dd.firebaseapp.com",
    databaseURL: "https://clone-600dd.firebaseio.com",
    projectId: "clone-600dd",
    storageBucket: "clone-600dd.appspot.com",
    messagingSenderId: "86759652809",
    appId: "1:86759652809:web:3e3f8bd8bf216017b0fc18",
    measurementId: "G-YQHQHZDZXY"
});

const auth = firebase.auth();
export {auth};
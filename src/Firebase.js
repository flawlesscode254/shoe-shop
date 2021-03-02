import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDY_WPdh-0TsER_1gi7Zebr08TRDsTSJuk",
    authDomain: "shoe-shop-202cb.firebaseapp.com",
    projectId: "shoe-shop-202cb",
    storageBucket: "shoe-shop-202cb.appspot.com",
    messagingSenderId: "1026094853262",
    appId: "1:1026094853262:web:7401b135dd803f4f80eddf",
    measurementId: "G-75X22H9NB8"
})

const auth = firebaseApp.auth()
const db = firebaseApp.firestore()

export { auth, db }
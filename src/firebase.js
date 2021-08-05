import firebase  from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDAzvKpctPtsH3JEVpKruIshLrTO_RHa7c",
    authDomain: "todo-list-react-4145c.firebaseapp.com",
    projectId: "todo-list-react-4145c",
    storageBucket: "todo-list-react-4145c.appspot.com",
    messagingSenderId: "306268123721",
    appId: "1:306268123721:web:f94e9f67ffee3bca3fc598",
    measurementId: "G-HJR0JWP5EP"
});

const  db = firebaseApp.firestore();

export {db};
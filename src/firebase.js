import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBajwHhj9hPq9ERWEmlAqOKuhQiBtsrWAQ",
    authDomain: "slack-clone-52be9.firebaseapp.com",
    projectId: "slack-clone-52be9",
    storageBucket: "slack-clone-52be9.appspot.com",
    messagingSenderId: "878501760512",
    appId: "1:878501760512:web:12cb3726d5a92e6579d2e5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;
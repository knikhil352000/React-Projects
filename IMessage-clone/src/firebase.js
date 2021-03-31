import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAfhBZ77D7_O7BDiG21LsZtbSTw1S2nfaI",
    authDomain: "imessage-clone-36eba.firebaseapp.com",
    projectId: "imessage-clone-36eba",
    storageBucket: "imessage-clone-36eba.appspot.com",
    messagingSenderId: "73992590794",
    appId: "1:73992590794:web:c8cd7f4c01492cc65a2b33"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider };
  export default db;
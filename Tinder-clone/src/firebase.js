import firebase from 'firebase'

const firebaseConfig = {
    apiKey: ApiKey,
    authDomain: AuthDomain,
    projectId: ProjectId,
    storageBucket: StorageBucket,
    messagingSenderId: MessagingSenderId,
    appId: AppId
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();  

export default database;
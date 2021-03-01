import firebase from 'firebase'
import { ApiKey, AuthDomain, ProjectId, StorageBucket, MessagingSenderId, AppId} from './env.js'
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
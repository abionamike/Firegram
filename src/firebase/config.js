import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYEc7RwIGQN4vAdM99qxGC2IiE3ZHwR3k",
    authDomain: "firegram-bdbed.firebaseapp.com",
    databaseURL: "https://firegram-bdbed.firebaseio.com",
    projectId: "firegram-bdbed",
    storageBucket: "firegram-bdbed.appspot.com",
    messagingSenderId: "631190364827",
    appId: "1:631190364827:web:b2162ef91f44e0a19b9c3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
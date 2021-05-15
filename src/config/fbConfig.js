import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var config = {
    apiKey: "AIzaSyC64_VfJex7jyhYli6h22fbAOyi-uxdbTk",
    authDomain: "erdal-marioplan.firebaseapp.com",
    projectId: "erdal-marioplan",
    storageBucket: "erdal-marioplan.appspot.com",
    messagingSenderId: "631842751808",
    appId: "1:631842751808:web:ec2ab9a303a1ac72e866a5"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase 






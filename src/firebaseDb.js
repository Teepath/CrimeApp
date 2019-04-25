import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAeCMkoXRZTUJsi-tz9Cf9zzcKO-SgfDA",
    authDomain: "newapp-53f70.firebaseapp.com",
    databaseURL: "https://newapp-53f70.firebaseio.com",
    projectId: "newapp-53f70",
    storageBucket: "newapp-53f70.appspot.com",
    messagingSenderId: "352725102726"
  };
  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const googleAuth = new firebase.auth.GoogleAuthProvider();

  export{
    firebase,
    firebaseDB,
    googleAuth
  }
  
  
  //firebaseDB.ref().set('it works 2');
import { firebase} from "firebase";

const  config = {
    apiKey: "AIzaSyAAeCMkoXRZTUJsi-tz9Cf9zzcKO-SgfDA",
    authDomain: "newapp-53f70.firebaseapp.com",
    databaseURL: "https://newapp-53f70.firebaseio.com",
    projectId: "newapp-53f70",
    storageBucket: "newapp-53f70.appspot.com",
    messagingSenderId: "352725102726"
  };
  firebase.initializeApp(config);

  export default config;
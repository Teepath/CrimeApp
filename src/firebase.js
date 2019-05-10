import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCHsNQiRmUdjS1WUywnjDTQ0wqFRdTtL4g",
    authDomain: "nbaapp-cddc9.firebaseapp.com",
    databaseURL: "https://nbaapp-cddc9.firebaseio.com",
    projectId: "nbaapp-cddc9",
    storageBucket: "nbaapp-cddc9.appspot.com",
    messagingSenderId: "329426570343"
  };
  firebase.initializeApp(config);

  const firebaseDb= firebase.database();

  const firebaseArticle = firebaseDb.ref('articles');
  const firebaseTeams = firebaseDb.ref('teams');
  const firebaseVideos = firebaseDb.ref('videos');

  const firebaseLooper = (snapshot) =>{

            const data = [];
                snapshot.forEach((childSnapshot) => {
                    data.push({
                        ...childSnapshot.val(),
                        id:childSnapshot.key
                    })
                });
            
                return data;
  }

  export {
      firebase,
      firebaseArticle,
      firebaseTeams,
      firebaseVideos,
      firebaseDb, 
      firebaseLooper
  }
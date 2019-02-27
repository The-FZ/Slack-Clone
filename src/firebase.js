import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBUfESSfjzFJgyKLSnk7FMVxVSvuttjWRA",
  authDomain: "slack-clone-93ae5.firebaseapp.com",
  databaseURL: "https://slack-clone-93ae5.firebaseio.com",
  projectId: "slack-clone-93ae5",
  storageBucket: "slack-clone-93ae5.appspot.com",
  messagingSenderId: "178166460716"
};
firebase.initializeApp(config);

export default firebase;
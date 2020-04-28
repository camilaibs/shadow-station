import firebase from 'firebase';

  // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCVLbj_svNBZuDmUd9SaxmcEnQzEefXMMI",
    authDomain: "shadow-station.firebaseapp.com",
    databaseURL: "https://shadow-station.firebaseio.com",
    projectId: "shadow-station",
    storageBucket: "shadow-station.appspot.com",
    messagingSenderId: "427748243762",
    appId: "1:427748243762:web:540b56b7b89fd02388ff2b"
  };

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();




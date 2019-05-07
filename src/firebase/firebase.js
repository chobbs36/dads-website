import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAaxLNstKZ8MLuaI_BZiBfmEkd4Wo0wBKk",
    authDomain: "dadssite.firebaseapp.com",
    databaseURL: "https://dadssite.firebaseio.com",
    projectId: "dadssite",
    storageBucket: "dadssite.appspot.com",
    messagingSenderId: "533159153751"
};


var fire = firebase.initializeApp(config);


export default fire;



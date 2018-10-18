import firebase from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyAtL4rQCO45Pby7y_KBxl2kdQSETyBhCy8",
    authDomain: "georeminder-1539180193727.firebaseapp.com",
    databaseURL: "https://georeminder-1539180193727.firebaseio.com",
    projectId: "georeminder-1539180193727",
    storageBucket: "georeminder-1539180193727.appspot.com",
    messagingSenderId: "392716863914"
};
var fire = firebase.initializeApp(config);
export default fire;

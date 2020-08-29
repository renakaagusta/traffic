import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBHUh6NsIqAT1JMv7MKemSsjeG1IECckkE",
    authDomain: "gemastik-ba7cc.firebaseapp.com",
    databaseURL: "https://gemastik-ba7cc.firebaseio.com",
    projectId: "gemastik-ba7cc",
    storageBucket: "gemastik-ba7cc.appspot.com",
    messagingSenderId: "277223142333",
    appId: "1:277223142333:web:20bad29da51e1eb3ced8d4"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

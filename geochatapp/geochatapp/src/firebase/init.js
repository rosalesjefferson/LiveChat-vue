import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBbEib9OVXObMmQCt8SL-VqAN77q08HGHw",
  authDomain: "geo-chatapplication.firebaseapp.com",
  databaseURL: "https://geo-chatapplication.firebaseio.com",
  projectId: "geo-chatapplication",
  storageBucket: "geo-chatapplication.appspot.com",
  messagingSenderId: "646209289846",
  appId: "1:646209289846:web:dd16faf6d5810e84d1e957",
  measurementId: "G-2VJFX984K5"
};
// Initialize Firebase
const dbfirebase = firebase.initializeApp(firebaseConfig);
// dbfirebase.firestore().settings({ timestampsInSnapshots: true})

export default dbfirebase.firestore()


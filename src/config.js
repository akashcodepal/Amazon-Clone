import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCiee7zIadOSg0XWRA6YWFU_cVuQyqlD7Q",
    authDomain: "byakash-6ecbe.firebaseapp.com",
    databaseURL: "https://byakash-6ecbe.firebaseio.com",
    projectId: "byakash-6ecbe",
    storageBucket: "byakash-6ecbe.appspot.com",
    messagingSenderId: "662839796042",
    appId: "1:662839796042:web:8241125dff44c5f55fa1b3",
    measurementId: "G-TP9YN29MCD"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;
import firebase from 'firebase/app'

import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA1HX6YSKQG-O84QS0PDl3yCeALqje0CSA",
    authDomain: "yt-clone-84e0e.firebaseapp.com",
    projectId: "yt-clone-84e0e",
    storageBucket: "yt-clone-84e0e.appspot.com",
    messagingSenderId: "859845558345",
    appId: "1:859845558345:web:e475f8983124cbf3dcff98",
    measurementId: "G-Q21PKSM6J4"
};


firebase.initializeApp(firebaseConfig)

export default firebase.auth()
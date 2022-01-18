import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAF18MtIIMYpfa9fYih1uQcnjc9EtbU9co",
  authDomain: "nextjsblogfay.firebaseapp.com",
  projectId: "nextjsblogfay",
  storageBucket: "nextjsblogfay.appspot.com",
  messagingSenderId: "972136465751",
  appId: "1:972136465751:web:c9a2210fcad424118d6a12"
};


if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth,db,storage,serverTimestamp}



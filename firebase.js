import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAnZqtBDCsf0ssD8aGskaPedqi0nqhqoaQ",
  authDomain: "nextjsblogfay-2dfdd.firebaseapp.com",
  projectId: "nextjsblogfay-2dfdd",
  storageBucket: "nextjsblogfay-2dfdd.appspot.com",
  messagingSenderId: "501553862449",
  appId: "1:501553862449:web:15fc6326ab334065c04210"
};


if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth,db,storage,serverTimestamp}



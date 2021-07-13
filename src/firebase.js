import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD39uweEa46gjANZIKpPiE1QdCz7h7LK8k",
    authDomain: "linkedin-clone-b1a67.firebaseapp.com",
    projectId: "linkedin-clone-b1a67",
    storageBucket: "linkedin-clone-b1a67.appspot.com",
    messagingSenderId: "525328974609",
    appId: "1:525328974609:web:7dff2e734a732a7c03c2b0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}
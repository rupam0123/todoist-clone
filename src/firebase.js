import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig =firebase.initializeApp({
    apiKey: "AIzaSyBCeq_8i0-m3WbdgSm5-vx5DIPorYfckp8",
    authDomain: "todoist-clone-45935.firebaseapp.com",
    databaseURL: "https://todoist-clone-45935-default-rtdb.firebaseio.com",
    projectId: "todoist-clone-45935",
    storageBucket: "todoist-clone-45935.appspot.com",
    messagingSenderId: "362715924035",
    appId: "1:362715924035:web:14f197cc7ef1ccae80f6f6",
    measurementId: "G-X6W8ZCX88M"
})

export {firebaseConfig as firebase}
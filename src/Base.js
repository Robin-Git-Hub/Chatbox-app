import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9w7JglZgpv7GKlBNRqjj9BxRcCJqTZ0A",
    authDomain: "chatbox-app-a8ec6.firebaseapp.com",
    databaseURL: "https://chatbox-app-a8ec6.firebaseio.com",
})

const base = Rebase.createClass(firebase.database());

export {firebaseApp}

export default base

import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYAyt3WLdEuz6vt6WI0Zwtzy9hgZgJLjo",
    authDomain: "vue-baseapp-firebase.firebaseapp.com",
    projectId: "vue-baseapp-firebase",
    storageBucket: "vue-baseapp-firebase.appspot.com",
    messagingSenderId: "382003927639",
    appId: "1:382003927639:web:b99b228faa00f12676a112"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();

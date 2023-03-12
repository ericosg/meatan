import '../styles/index.scss';

// https://www.colourlovers.com/palette/888820/steak_frites
// #1A0803,#621302,#BB3F09,#EF7D01,#F8BD55

console.log('webpack starterkit');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdxQayeI67wdggT_Se3NirDQLgY-ZidLU",
    authDomain: "meatan.firebaseapp.com",
    projectId: "meatan",
    storageBucket: "meatan.appspot.com",
    messagingSenderId: "246364868612",
    appId: "1:246364868612:web:0d4c9d3cc9ce7613442551",
    measurementId: "G-E340WSKREJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'build_started');
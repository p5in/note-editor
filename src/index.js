import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAODWpFABj3boVYMpeZT9Eamolk1CLpprk",
  authDomain: "evernote-clone-e28e7.firebaseapp.com",
  databaseURL: "https://evernote-clone-e28e7.firebaseio.com",
  projectId: "evernote-clone-e28e7",
  storageBucket: "evernote-clone-e28e7.appspot.com",
  messagingSenderId: "3335571001",
  appId: "1:3335571001:web:c15858e45c634eb7f36fe8"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

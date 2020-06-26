import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./Login/login";
import SignupComponent from "./Signup/signup";
import DashboardComponent from "./Dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBR3WA5y2oAvhj8s4kPRy_1NtCYJYGc3YM",
  authDomain: "my-chat-app-151c6.firebaseapp.com",
  databaseURL: "https://my-chat-app-151c6.firebaseio.com",
  projectId: "my-chat-app-151c6",
  storageBucket: "my-chat-app-151c6.appspot.com",
  messagingSenderId: "206931052222",
  appId: "1:206931052222:web:959cfd593f6134d277c0ef",
  measurementId: "G-E3GP0ZSW8J",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

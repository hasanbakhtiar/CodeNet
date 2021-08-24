import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCbVwT9OpDiICvDSewPRD0u2wdZxEmi3wQ",
  authDomain: "codenet-app.firebaseapp.com",
  projectId: "codenet-app",
  storageBucket: "codenet-app.appspot.com",
  messagingSenderId: "666716482561",
  appId: "1:666716482561:web:78fe88d7376d6ffa7aa400"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
 blog1:{
  blod1Id: 1,
  blog1Title: "test1",
  blog1Content: "sjfhksjfhsdfsjfhksjfhsdfsjfhksjfhsdfsjfhksjfhsdfsjfhksjfhsdf"
 
 },

 blog2:{
  blod1Id: 2,
  blog1Title: "test2",
  blog1Content: "sjfhksjfhsdfsjfhksjfhsdfsjfhksjfhsdfsjfhksjfhsdfsjfhksjfhsdf"
 
 }

});


ReactDOM.render(
  <h1>Hello</h1>,
  document.getElementById('root')
);



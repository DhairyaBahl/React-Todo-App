import firebase from 'firebase';
//this firebase have to be installed by "npm i firebase" command 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD69RlzyzVo-EHRm3LnhvRxlYsUNVVy_lA",
  authDomain: "mui-todo-app.firebaseapp.com",
  databaseURL: "https://mui-todo-app-default-rtdb.firebaseio.com",
  projectId: "mui-todo-app",
  storageBucket: "mui-todo-app.appspot.com",
  messagingSenderId: "202201009802",
  appId: "1:202201009802:web:49a2e8c52ca88f95706773",
  measurementId: "G-GS47C6GSP2"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

export default db;
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCSRDdqc7iOpEo7sivgBtGNUavZFSGNedY",
  authDomain: "expensify-acd45.firebaseapp.com",
  databaseURL: "https://expensify-acd45.firebaseio.com",
  projectId: "expensify-acd45",
  storageBucket: "expensify-acd45.appspot.com",
  messagingSenderId: "580851951042",
  appId: "1:580851951042:web:4dde7126b1d540668aa25b",
  measurementId: "G-2WSGMY31YB"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: 'Pavan Tank',
  age: 19,
  location: {
    city: 'surat',
    state: 'gujarat',
    country: 'india'
  }
});

database.ref('age').set(20);

database.ref('attributes').set({
  height: 73,
  weight: 155
});
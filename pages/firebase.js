import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ101C9JnMbyefVZiJregrm2n1aoVMK98",
  authDomain: "anyone-question.firebaseapp.com",
  databaseURL: "https://anyone-question-default-rtdb.firebaseio.com",
  projectId: "anyone-question",
  storageBucket: "anyone-question.appspot.com",
  messagingSenderId: "266126378334",
  appId: "1:266126378334:web:620616f3cfa6cff89cfbcf",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const questionRef = database.ref("questions");

export const pushQuestion = ({ name, title, text }) => {
  questionRef.push({ name, title, text });
};

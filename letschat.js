
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdKEReT6ys5xu0QyqmIek3TpX5eM1vP2s",
    authDomain: "classtest-c8fa8.firebaseapp.com",
    projectId: "classtest-c8fa8",
    storageBucket: "classtest-c8fa8.appspot.com",
    messagingSenderId: "169812638875",
    appId: "1:169812638875:web:b8483249287b60532bda3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
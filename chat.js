// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE3
const firebaseConfig = {
  apiKey: "AIzaSyAVSo1DAYzBwtTxJz3eaSviPQbKTbxBZA0",
  authDomain: "let-chat-c885f.firebaseapp.com",
  projectId: "let-chat-c885f",
  storageBucket: "let-chat-c885f.appspot.com",
  messagingSenderId: "911834931477",
  appId: "1:911834931477:web:87aaa37b5930b92aa3c91c",
  measurementId: "G-NDF8HPK94J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name)
    window.location = "chat_room.html"
}




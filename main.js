document.querySelector("#Subscribe-form").addEventListener("submit" , function(e){
  e.preventDefault(),
  submitProduct()
})
var firebaseConfig = {
     apiKey: "AIzaSyCg7M2pZKPJRcKcgo-iACn4Mq5Eah4dWc4",
     authDomain: "gomycode-512a5.firebaseapp.com",
     databaseURL: "https://gomycode-512a5.firebaseio.com",
     projectId: "gomycode-512a5",
     storageBucket: "",
     messagingSenderId: "2959726347",
     appId: "1:2959726347:web:cd2e2303d6e28d17"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  let database = firebase.database()

  let ref =database.ref("Subscribe")
  function submitProduct(){

    let data ={
     Name : document.querySelector("#Name-").value,
     Email : document.querySelector("#Email-").value,
     Number : document.querySelector("#PhoneNumber-").value,
     school : document.querySelector("#UniSchool-").value,
    web: document.querySelector("#web").value,
  }
    ref.push(data)
}
   

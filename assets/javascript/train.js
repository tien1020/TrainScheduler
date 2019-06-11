var firebaseConfig = {
    apiKey: "AIzaSyCo7Cy4SCT4PwMKpUVCb4RE2j01PEr7afM",
    authDomain: "coderbayy-81f0b.firebaseapp.com",
    databaseURL: "https://coderbayy-81f0b.firebaseio.com",
    projectId: "coderbayy-81f0b",
    storageBucket: "",
    messagingSenderId: "1056622035770",
    appId: "1:1056622035770:web:e34e49e7866146db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();


  $("#submit").on("click", function(){
      var nameInput = $("#name").val().trim();
      var destinationInput =$("#destination").val().trim();
      var timeInput =$("#time").val().trim();
      var frequencyInput =$("#frequency").val().trim();

      database.ref().push({
        name: nameInput,
        destination: destinationInput,
        time: timeInput,
        frequency: frequencyInput,
      })


  })

  database.ref().on("child_added",function(snapshot){
  
    var  name=snapshot.val().name;
    var destination=snapshot.val().destination;
    var time=snapshot.val().time;
    var frequency=snapshot.val().frequency;
 
   
 
 
      var tr=$("<tr>");
      
 var td1=$("<td>")
     td1.text(name)
    tr.append(td1)
 
    var td2=$("<td>")
     td2.text(destination)
    tr.append(td2)
 
 
    var td3=$("<td>")
     td3.text(time)
    tr.append(td3)
 
    var td4=$("<td>")
     td4.text(frequency)
    tr.append(td4)
 
    var td5=$("<td>")
     td5.text(mimutesAway)
    tr.append(td5)
 
 

        
 
    $("tbody").append(tr);
   
 
 
 });
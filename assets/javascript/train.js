var firebaseConfig = {
  apiKey: "AIzaSyAc6tcf1v4GWlZSOcT_TgvIlGMcIQ6pkes",
  authDomain: "users-2ea9e.firebaseapp.com",
  databaseURL: "https://users-2ea9e.firebaseio.com",
  projectId: "users-2ea9e",
  storageBucket: "",
  messagingSenderId: "484082307593",
  appId: "1:484082307593:web:2c480d0ed0d90752"
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
    var firstTimeConverted = moment(time, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);
      var tRemainder = diffTime % frequency;
      console.log(tRemainder);
      var minutesAway = frequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + minutesAway);
      var nextTrain = moment().add(minutesAway, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
  
 
    
 
 
      var tr=$("<tr>");
      
 var td1=$("<td>")
     td1.text(name)
    tr.append(td1)
 
    var td2=$("<td>")
     td2.text(destination)
    tr.append(td2)
 
    var td3=$("<td>")
    td3.text(frequency)
   tr.append(td3)
 
    var td4=$("<td>")
     td4.text(time)
    tr.append(td4)
 
  
 
    var td5=$("<td>")
     td5.text(minutesAway)
    tr.append(td5)
 
 

        
 
    $("tbody").append(tr)
   
 
 
 })
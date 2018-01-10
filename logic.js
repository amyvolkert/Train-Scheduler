// Update Firebase db
// Incorporate Moment.js
// Possible drop-down items
	// Trains: Thomas, Edward, Gordon, Emily, Henry, Toby, Percy
	// Destinations: Water Tower, Blue Mountain Mine, Roundhouse, Snow Tunnel, Rumblin' Bridge, Popcorn Factory, Sodor Paint Factory
	// Frequecy in minutes
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCqWe302zhuIwBHvHldf8uJoMPuGaP8Szs",
    authDomain: "train-scheduler-d0466.firebaseapp.com",
    databaseURL: "https://train-scheduler-d0466.firebaseio.com",
    projectId: "train-scheduler-d0466",
    storageBucket: "",
    messagingSenderId: "757381073056"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  // Button for adding trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    // Grabbing the user's input
    var trainName = $("train-name-input").val().trim();
    var trainDestination = $("destination-input").val().trim();
    var firstTime = $("first-time-input").val().trim();
    var howOften = $("frequency-input").val().trim();
 // Temporary object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: firstTime,
      frequency: howOften
    };
  // Uploading data to Firebase db
  // database.ref references the root
  database.ref().push(newTrain);
  // Logging data to the console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);
  // Clearing the text inputs
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-time-input").val("");
  $("#frequency-input").val("");
// On click event ends
});
// Firebase event that adds train data to the db and to the HTML
database.ref().on("child-added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  // Storing data in variables; from the newTrain object above
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var firstTime = childSnapshot.val().time;
  var howOften = childSnapshot.val().frequency;
  console.log(trainName);
  console.log(trainDestination);
  console.log(firstTime);
  console.log(howOften);
  // Add each train's data into the table
  $("#train-table > tbody").append"<tr><td>" + trainName +
  "</td><td>" + trainDestination "</td></tr>";
});

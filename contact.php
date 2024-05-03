<?php

// Database connection details (replace with your own)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "my database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Escape user input to prevent SQL injection
$firstName = mysqli_real_escape_string($conn, $_POST['First_name']);
$lastName = mysqli_real_escape_string($conn, $_POST['Last_name']);
$country = mysqli_real_escape_string($conn, $_POST['country']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$phone = mysqli_real_escape_string($conn, $_POST['phone']);
$travelers = mysqli_real_escape_string($conn, $_POST['travelers']);
$date = mysqli_real_escape_string($conn, $_POST['date']);
$days = mysqli_real_escape_string($conn, $_POST['days']);
$destination = mysqli_real_escape_string($conn, $_POST['destination']);
$accommodation = mysqli_real_escape_string($conn, $_POST['accommodation']);
$message = mysqli_real_escape_string($conn, $_POST['message']);

// SQL insert statement
$sql = "INSERT INTO contact_form (first_name, last_name,  email, phone, number_travelers, start_date, number_days, country, destinations, accommodation, message)
VALUES ('$firstName', '$lastName',  '$email', '$phone', '$travelers', '$date', '$days','$country', '$destination', '$accommodation', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "New inquiry created successfully!, Thank you for contacting Apes Africa Safaris Tours and Travel Uganda";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

<?php

$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "my database"; // Replace with your database name
$servername = "localhost";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Check if form is submitted using POST

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Sanitize and validate user input

  $name_first = mysqli_real_escape_string($conn, $_POST ["First_name"]);
  $name_last = mysqli_real_escape_string($conn, $_POST["Last_name"]);
  $email = mysqli_real_escape_string($conn, $_POST["email"]);
  $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
  $number_travelers = mysqli_real_escape_string( $conn, $_POST["number"]);
  $start_date = mysqli_real_escape_string($conn, $_POST["date"]);
  $number_days = mysqli_real_escape_string($conn, $_POST["number"]);

  // Get selected interests (checkboxes)
  $interests = array();
  if (isset($_POST['mountain Gorilla trekking'])) {
    $interests[] = 'Mountain Gorilla trekking';
  }
  if (isset($_POST['Chimpanzee'])) {
    $interests[] = 'Chimpanzee';
  }
  if (isset($_POST['Natural walks'])){
    $interests[] = 'Natural walks';
  }
  if (isset($_POST['champing Safari Holidays'])) {
    $interests[] = 'champing Safari Holidays';
  }
  if (isset($_POST['Boat Trips'])) {
    $interests[] = 'Boat  Trips';
  }
  if (isset($_POST['Air Ballon Adventures'])) {
    $interests[] = 'Air Ballon Adventures';

  }
  if (isset($_POST['Rwenzo  Trekking'])) {
    $interests[] = 'Rwenzo Trekking';
  }
  if (isset($_POST['family Holiday'])) {
    $interests[] = 'family Holiday';
  }
  // ... Add logic for other checkboxes

  // Get selected destinations (checkboxes)
  $destinations = array();
  if (isset($_POST['destinations'])) {
    $destinations = $_POST['destinations']; // Array of selected destinations
  }

  // Get desired accommodation (radio buttons)
  $accommodation = filter_input(INPUT_POST, "Budget", FILTER_SANITIZE_STRING);

  // Validate and process data further (optional)
$sql = "INSERT INTO `contact_form` (`name_first`, `name_last `, `email `, `phone`, `number_travelers`, `start_date`, `number_days`, `interests`, `destinations`, `accommodations`) VALUES (?, ?, ?, ?, ?,?,?,?,?,?)";
 $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssssss", $name_first, $name_last, $email, $phone, $number_travelers, $start_date, $number_days, implode(',', $interests), implode(',', $destinations), $accommodation);
  // Send email notification or store data in database (optional)

  /*$message = "A new contact form submission has been received:\n\n";
  $message .= "Name: $name_first $name_last\n";
  $message .= "Email: $email\n";
  $message .= "Phone: $phone\n";
  $message .= "Number of Travelers: $number_travelers\n";
  $message .= "Start Date: $start_date\n";
  $message .= "Number of Days: $number_days\n";
  $message .= "Interests:\n";
  $message .= implode("\n", $interests); // List interests
  $message .= "\nDestinations:\n";
  $message .= implode("\n", $destinations); // List destinations
  $message .= "\nDesired Accommodation: $accommodation";

  // Replace with your actual mail sending logic
  mail('barigyedavis6@gmail.com', 'Contact Form Submission', $message);
*/
  // Display success message or redirect to a confirmation page
  if ($stmt->execute() === true) {
    echo '<p>Thank you for contacting Apes Africa Safaris! Your message has been sent.</p>';
  }
else {
    echo "Error: " . $stmt->error;
  }
  $stmt->close();
}

?>
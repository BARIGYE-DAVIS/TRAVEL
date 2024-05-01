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

  $name_first = filter_input(INPUT_POST, 'ordre name', FILTER_SANITIZE_STRING);
  $name_last = filter_input(INPUT_POST, 'order name', FILTER_SANITIZE_STRING);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
  $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
  $number_travelers = filter_input(INPUT_POST, 'number', FILTER_SANITIZE_NUMBER_INT);
  $start_date = filter_input(INPUT_POST, 'date', FILTER_SANITIZE_STRING);
  $number_days = filter_input(INPUT_POST, 'number', FILTER_SANITIZE_NUMBER_INT);

  // Get selected interests (checkboxes)
  $interests = array();
  if (isset($_POST['mountain Gorilla trekking'])) {
    $interests[] = 'Mountain Gorilla Trekking';
  }
  if (isset($_POST['Chimpanzee tracking'])) {
    $interests[] = 'Chimpanzee Tracking';
  }
  if (isset($_POST['Natural walks'])){
    $interests[] = 'Natural walks';
  }
  if (isset($_POST['champing Safari Holidays'])) {
    $interests[] = 'champing Safari Holidays';
  }
  if (isset($_POST['Boat Trips'])) {
    $interests[] = 'Boat  Trip';
  }
  if (isset($_POST['Air Ballon Adventures'])) {
    $interests[] = 'Air Ballon Adventures';

  }
  if (isset($_POST['Rwenzo  trekking'])) {
    $interests[] = 'Rwenzo trekking';
  }
  if (isset($_POST['family holiday'])) {
    $interests[] = 'family holiday';
  }
  // ... Add logic for other checkboxes

  // Get selected destinations (checkboxes)
  $destinations = array();
  if (isset($_POST['destinations'])) {
    $destinations = $_POST['destinations']; // Array of selected destinations
  }

  // Get desired accommodation (radio buttons)
  $accommodation = filter_input(INPUT_POST, 'Budget', FILTER_SANITIZE_STRING);

  // Validate and process data further (optional)
$sql = "INSERT INTO `contact_form` (`NAME`, `NUMBER_OF_PEOPLE`, `EMAIL`, `PASSPORT_NUMBER`, `WHATSAPP_NUMBER`) VALUES (?, ?, ?, ?, ?)";
  // Send email notification or store data in database (optional)

  $message = "A new contact form submission has been received:\n\n";
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

  // Display success message or redirect to a confirmation page
  echo '<p>Thank you for contacting Apes Africa Safaris! Your message has been sent.</p>';

} else {
  // Display the contact form if accessed directly
  // You can include the HTML form here
}

?>




?>
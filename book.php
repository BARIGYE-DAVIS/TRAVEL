<?php
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your actual password
$dbname = "my database"; // Replace with your database name

// Establish connection
try {
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    throw new Exception("Connection failed: " . $conn->connect_error);
  }

  // Check if form is submitted using POST
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $number_of_people = mysqli_real_escape_string($conn, $_POST["number"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $passport_number = mysqli_real_escape_string($conn, $_POST["number"]);
    $whatsapp_number = mysqli_real_escape_string($conn, $_POST["telephone"]);

    // Prepare the form to be submitted with error handling
    $sql = "INSERT INTO `ORDE` (`NAME`, `NUMBER_OF_PEOPLE`, `EMAIL`, `PASSPORT_NUMBER`, `WHATSAPP_NUMBER`) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
      throw new Exception("Error preparing statement: " . $conn->error);
    }

    // Bind parameters to prevent SQL injection with data type checks
    $data_types = "sssss"; // Assuming all are strings
    if (is_numeric($number_of_people)) {
      $data_types = "sisss"; // Change to "i" for integer
    }
    $stmt->bind_param($data_types, $name, $number_of_people, $email, $passport_number, $whatsapp_number);

    // Execute the statement with error handling
    if ($stmt->execute() === true) {
      echo "Request sent, our team will respond soon.";
    } else {
      throw new Exception("Error executing statement: " . $stmt->error);
    }

    // Close the prepared statement
    $stmt->close();
  }
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
} finally {
  // Close the connection
  $conn->close();
}
?>

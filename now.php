<?php
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your actual password
$dbname = "my database"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted using POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = mysqli_real_escape_string($conn, $_POST["name"]);
  $email = mysqli_real_escape_string($conn, $_POST["email"]);

  // Assuming days is an integer
  $days = (int)mysqli_real_escape_string($conn, $_POST["days"]);  // Cast to integer

  // Assuming date is a valid date format (e.g., YYYY-MM-DD)
  $date = mysqli_real_escape_string($conn, $_POST["date"]);

  // Prepare the statement
  $sql = "INSERT INTO `now` (NAME, EMAIL, DAYS, DATE) VALUES(?, ?, ?, ?)";  // Ensure table and field names match your database
  $stmt = $conn->prepare($sql);

  // Bind parameters with appropriate data types
  $data_types = "ssss";  // All strings

  // Adjust data types if necessary (e.g., "isi" for integer days)
  if (is_numeric($days)) {
    $data_types = "ssss";  // String, String, Integer, String
  }

  $stmt->bind_param($data_types, $name, $email, $days, $date);

  // Execute the statement with error handling
  if ($stmt->execute() === true) {
    echo "Request sent successfully!";
  } else {
    echo "Error: " . $stmt->error;
  }

  // Close the statement
  $stmt->close();
}

// Close the connection
$conn->close();
?>

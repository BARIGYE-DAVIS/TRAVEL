<?php
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
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
    $days = mysqli_real_escape_string($conn, $_POST["days"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $message = mysqli_real_escape_string($conn, $_POST["message"]);
   
    

    // Prepare statement using prepared statements
    $sql = "INSERT INTO bookings (NAME, DAYS, EMAIL, MESSAGE) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    // Bind parameters to prevent SQL injection
    $stmt->bind_param("ssss", $name, $days, $email, $message,);

    if ($stmt->execute() === true) {
        echo "Request sent successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>

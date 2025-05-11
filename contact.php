<?php
// Ensure no output before header
header('Content-Type: application/json');

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio_contact";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed'
    ]);
    exit;
}

// Get form data
$name = isset($_POST['from_name']) ? $_POST['from_name'] : '';
$email = isset($_POST['email_sender']) ? $_POST['email_sender'] : '';
$subject = isset($_POST['subject_sender']) ? $_POST['subject_sender'] : '';
$message = isset($_POST['message_sender']) ? $_POST['message_sender'] : '';

// Validate input
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode([
        'success' => false,
        'message' => 'All fields are required'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email format'
    ]);
    exit;
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $subject, $message);

// Execute and respond
if ($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => 'Message sent to developer successfully!'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $stmt->error
    ]);
}

$stmt->close();
$conn->close();
?>
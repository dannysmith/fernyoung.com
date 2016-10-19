<?
//Retrives data from a post and sends an email.

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if (mail("fern@fernyoung.com", "Message from $name", $message, "From: $email")) {
  echo("Message Sent!");
 } else {
  header("HTTP/1.0 500 Internal Server Error");
 }
?>
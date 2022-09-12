<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "nicolecht18@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html#contact");

    // echo '<script type="text/javascript">';
    // echo ' alert("JavaScript Alert Box by PHP")';  //not showing an alert box.
    // echo '</script>';
}

?>
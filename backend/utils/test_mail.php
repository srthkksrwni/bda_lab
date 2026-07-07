<?php

include "send_alert.php";

$result = sendAlert(
    "Test Alert",
    "This is a test email from BDA Lab Admin Panel."
);

if ($result) {
    echo "Email sent successfully";
} else {
    echo "Email failed";
}

?>